// Navigation Tabs
document.querySelectorAll('nav li[data-tab]').forEach(item => {
    item.addEventListener('click', function () {
        // Remove active class from all tabs and contents
        document.querySelectorAll('nav li[data-tab]').forEach(nav => nav.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Show corresponding content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Update slider display
const plazoSlider = document.getElementById('calc-plazo-slider');
const plazoDisplay = document.getElementById('calc-plazo-display');

plazoSlider.addEventListener('input', function () {
    plazoDisplay.textContent = this.value + ' años';
});

// Calculator Logic
function calcularHipoteca() {
    // 1. Get raw inputs
    const precio = parseFloat(document.getElementById('calc-precio').value) || 0;
    const ahorros = parseFloat(document.getElementById('calc-ahorros').value) || 0;
    const plazo = parseInt(plazoSlider.value) || 30;
    const interesTIN = parseFloat(document.getElementById('calc-tipo').value) || 0;
    const impuestoITP = parseFloat(document.getElementById('calc-itp').value) || 0;
    const ingresosNetos = parseFloat(document.getElementById('calc-ingresos').value) || 0;

    const avalIco = document.getElementById('calc-ico')?.checked || false;

    // 2. Gastos de compraventa aprox (Notaria, Registro, Tasacion, Gestoria + ITP)
    // Asumimos Notaria/Registro/Gestoria/Tasacion = 2% aprox + ITP
    const porcentajeGastosExtra = 2.0;
    const totalImpuestosGastos = precio * ((impuestoITP + porcentajeGastosExtra) / 100);

    // 3. Ahorro necesario
    const entradaNecesaria = avalIco ? 0 : (precio * 0.20);
    const ahorroIdeal = entradaNecesaria + totalImpuestosGastos;

    // 4. Calcular préstamo a pedir
    // Préstamo = Precio + Gastos - Ahorros aportados
    let prestamo = precio + totalImpuestosGastos - ahorros;

    // Limit loan to not go infinitely negative
    if (prestamo < 0) prestamo = 0;

    // Límite del préstamo según el banco (normal vs ICO)
    let maxFinanciacion = avalIco ? precio : (precio * 0.80);

    // Warnings
    const warningDiv = document.getElementById('ahorro-warning');
    if (prestamo > maxFinanciacion) {
        warningDiv.style.display = "block";
        if (avalIco) {
            warningDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Con el Aval ICO te financian el 100% de la vivienda, pero <strong style="color:var(--danger)">NO LOS GASTOS</strong>. Necesitas ahorrar tus gastos (' + totalImpuestosGastos.toLocaleString('es-ES') + ' €).';
        } else {
            warningDiv.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Tus ahorros (' + ahorros.toLocaleString('es-ES') + ' €) no cubren la Entrada + Gastos obligatorios.';
        }
    } else {
        warningDiv.style.display = "none";
    }

    // 5. Calcula Cuota Mensual (Sistema de Amortización Francés)
    const interesMensual = (interesTIN / 100) / 12;
    const numPagos = plazo * 12;
    let cuotaMensual = 0;

    if (interesMensual > 0) {
        cuotaMensual = prestamo * (interesMensual * Math.pow(1 + interesMensual, numPagos)) / (Math.pow(1 + interesMensual, numPagos) - 1);
    } else {
        cuotaMensual = prestamo / numPagos;
    }

    // 6. Calcula Ratio de Esfuerzo
    let ratioEsfuerzo = 0;
    if (ingresosNetos > 0) {
        ratioEsfuerzo = (cuotaMensual / ingresosNetos) * 100;
    }

    // 7. Update UI
    const formatCurrency = (num) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num);

    document.getElementById('res-cuota').textContent = formatCurrency(cuotaMensual) + ' / mes';
    document.getElementById('res-prestamo').textContent = formatCurrency(prestamo);
    document.getElementById('res-gastos').textContent = formatCurrency(totalImpuestosGastos) + ` (${impuestoITP + porcentajeGastosExtra}%)`;
    document.getElementById('res-ahorro-nec').textContent = formatCurrency(ahorroIdeal);

    // Effort Bar
    const barEsfuerzo = document.getElementById('bar-esfuerzo');
    const txtEsfuerzo = document.getElementById('res-esfuerzo-text');

    // Cap visual bar width to 100%
    let visualRatio = ratioEsfuerzo > 100 ? 100 : ratioEsfuerzo;
    barEsfuerzo.style.width = visualRatio.toFixed(1) + '%';
    barEsfuerzo.textContent = ratioEsfuerzo.toFixed(1) + '%';

    barEsfuerzo.className = 'bar'; // reset
    if (ratioEsfuerzo <= 30) {
        barEsfuerzo.classList.add('success');
        txtEsfuerzo.innerHTML = '<span style="color:var(--success)">Excelente.</span> Tu ratio de endeudamiento es seguro y está por debajo del límite recomendado.';
    } else if (ratioEsfuerzo <= 35) {
        barEsfuerzo.style.background = 'var(--warning)';
        barEsfuerzo.style.color = '#000';
        txtEsfuerzo.innerHTML = '<span style="color:var(--warning)">Al límite.</span> Estás cerca del 35% máximo sugerido por el Banco de España.';
    } else {
        barEsfuerzo.classList.add('danger');
        txtEsfuerzo.innerHTML = '<span style="color:var(--danger)">Cuidado.</span> Superas el 35%. Es muy poco probable que el banco te conceda la hipoteca sin avales o sin reducir la deuda.';
    }
    // Store global result for saving
    window.currentSimulationResult = {
        precio, ahorros, plazo, interesTIN, impuestoITP, ingresosNetos, avalIco,
        prestamo, cuotaMensual, totalImpuestosGastos, ahorroIdeal, ratioEsfuerzo
    };
}

// Simulaciones guardadas
// Simulaciones guardadas
let simulaciones = [];

const formatCurrency = (num) => new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(num);

async function cargarSimulacionesDesdeArchivo() {
    const stored = localStorage.getItem('hipotecawiki_sims');
    if (stored) {
        try {
            simulaciones = JSON.parse(stored);
            renderSimulaciones();
        } catch (e) { console.error("Error leyendo LocalStorage", e); }
    }
}

async function guardarSimulacion() {
    const startName = document.getElementById('calc-save-name').value.trim();
    if (!startName) {
        alert("Por favor, ponle un nombre a tu cálculo para guardarlo.");
        return;
    }

    const res = window.currentSimulationResult;
    const newSim = {
        id: Date.now().toString(),
        nombre: startName,
        ...res
    };

    simulaciones.push(newSim);
    document.getElementById('calc-save-name').value = '';

    localStorage.setItem('hipotecawiki_sims', JSON.stringify(simulaciones));
    renderSimulaciones();
}

function renderSimulaciones() {
    const list = document.getElementById('saved-sims-list');
    const container = document.getElementById('saved-sims-container');

    if (simulaciones.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';

    list.innerHTML = simulaciones.map(sim => `
        <div class="card glass" style="border-left: 4px solid var(--secondary);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                <h3>${sim.nombre} ${sim.avalIco ? '<span class="badge" style="position:static; margin-left:10px;">Con ICO</span>' : ''}</h3>
                <button onclick="borrarSimulacion('${sim.id}')" style="background:transparent; border:none; color:var(--danger); cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
            </div>
            
            <p class="text-sm">Precio: <strong>${formatCurrency(sim.precio)}</strong> | Plazo: ${sim.plazo}a | TIN: ${sim.interesTIN}%</p>
            <hr style="border: 1px solid rgba(255,255,255,0.05); margin:10px 0;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="text-sm">Cuota Calculada:</span>
                <strong style="color:var(--primary); font-size:1.2rem;">${formatCurrency(sim.cuotaMensual)}</strong>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:5px;">
                <span class="text-sm">Ratio Esfuerzo:</span>
                <strong style="color:${sim.ratioEsfuerzo <= 35 ? 'var(--success)' : 'var(--danger)'};">${sim.ratioEsfuerzo.toFixed(1)}%</strong>
            </div>
        </div>
    `).join('');
}

function borrarSimulacion(id) {
    simulaciones = simulaciones.filter(s => s.id !== id);
    localStorage.setItem('hipotecawiki_sims', JSON.stringify(simulaciones));
    renderSimulaciones();
}

// Initial calculation on load
window.onload = function () {
    calcularHipoteca();
    cargarSimulacionesDesdeArchivo();
};
