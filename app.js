// ============================================================
// SEED DATA — se carga solo la primera vez
// ============================================================
const SEED = [
  {n:1, nombre:"Espadín", productor:"Francisco Cruz Mendoza", comunidad:"Sta. Catarina Minas", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"Olla de barro · 7–9 años · Fermenta en sabino", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:2, nombre:"Tobalá ancestral", productor:"Ancestral", comunidad:"Sola de Vega", region:"Oaxaca", agave:"A. potatorum", especies:["potatorum"], variedades:["Tobalá"], notas:"Olla de barro · 9–12 años · 1440 msnm", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:3, nombre:"Bicuixe", productor:"Don Aniceto (Mezcaloteca)", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. karwinskii", especies:["karwinskii"], variedades:["Bicuixe"], notas:"Alambique cobre con refrescadera", grado:"48°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:4, nombre:"Belatoó", productor:"Agustín Güendulain", comunidad:"San Luis Amatlán", region:"Oaxaca", agave:"belatoó silvestre", especies:["belatoó"], variedades:["Belatoó"], notas:"Molino de piedra tirada por caballo · Sabino", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:5, nombre:"Tepeztate", productor:"Aureliano Hernández (Gente de Mezcal)", comunidad:"S. Baltazar Guelavila", region:"Oaxaca", agave:"A. marmorata", especies:["marmorata"], variedades:["Tepeztate"], notas:"25–30 años · Tinas de madera · Cobre", grado:"48°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:6, nombre:"Arroqueño", productor:"Misael Ramírez (Espacio Mezcal)", comunidad:"San José", region:"Oaxaca", agave:"A. americana", especies:["americana"], variedades:["Arroqueño"], notas:"Tahona chilena · Tina pino · Olla de barro", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:7, nombre:"Papalomé con lima (pechuga)", productor:"Don Rubén (Mezcaloteca)", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. cupreata + lima", especies:["cupreata"], variedades:["Papalomé"], notas:"Pechuga cítrica · Tina de pino · Cobre", grado:"50°", ub:"A", tipos:["pechuga"], foto:null},
  {n:8, nombre:"Papalometl Reserva", productor:"La Surreal", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. potatorum silvestre", especies:["potatorum"], variedades:["Papalometl"], notas:"Ancestral", grado:"50°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:9, nombre:"Cuish ensamble", productor:"Cuish", comunidad:"Oaxaca", region:"Oaxaca", agave:"angustifolia + rhodacantha + marmorata", especies:["angustifolia","rhodacantha","marmorata"], variedades:["Espadín","Mexicano","Tepeztate"], notas:"Espadín + Mexicano + Tepeztate", grado:"48°", ub:"A", tipos:["ensamble"], foto:null},
  {n:10, nombre:"Ensamble Miahuatlán", productor:"Teodoro García (Mezonte)", comunidad:"Miahuatlán", region:"Oaxaca", agave:"angustifolia + karwinskii", especies:["angustifolia","karwinskii"], variedades:["Espadín","Madrecuishe","Bicuixe"], notas:"Alambique árabe · Mezquite+guamúchil+jacaranda", grado:"—", ub:"B", tipos:["ensamble"], foto:null},
  {n:11, nombre:"Tepeztate Reposado", productor:"Lucio Bautista", comunidad:"Río de Ejutla", region:"Oaxaca", agave:"A. marmorata", especies:["marmorata"], variedades:["Tepeztate"], notas:"12–15 años · 2 meses en roble francés · Tahona", grado:"—", ub:"B", tipos:["reposado"], foto:null},
  {n:12, nombre:"Espadín con chile tabiche (pechuga)", productor:"Don Margarito (Mezcaloteca)", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. angustifolia + chile tabiche", especies:["angustifolia"], variedades:["Espadín"], notas:"Pechuga picante · Sabino · Cobre", grado:"47.8°", ub:"A", tipos:["pechuga"], foto:null},
  {n:13, nombre:"Jabalí", productor:"Rey Campero", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. convallis", especies:["convallis"], variedades:["Jabalí"], notas:"Especie rara y difícil de destilar", grado:"48.9°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:14, nombre:"Cuish Espadín monovarietal", productor:"Cuish", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"Joven", grado:"46°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:15, nombre:"Koch Mexicano", productor:"Koch", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. rhodacantha", especies:["rhodacantha"], variedades:["Mexicano"], notas:"Marca comercial de calidad", grado:"47.5°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:16, nombre:"Barro de Cobre", productor:"Adrián y Lucio Bautista", comunidad:"Río de Ejutla", region:"Oaxaca", agave:"angustifolia + potatorum", especies:["angustifolia","potatorum"], variedades:["Espadín","Tobalá"], notas:"Doble destilación mixta · Barro + cobre · 504 hs", grado:"43°", ub:"A", tipos:["ensamble"], foto:null},
  {n:17, nombre:"Koch Karwinskii Largo", productor:"Koch", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. karwinskii (var. Largo)", especies:["karwinskii"], variedades:["Largo"], notas:"12 años · Tahona · Olla de barro", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:18, nombre:"Koch Festival Pixelatl 2023 (pechuga)", productor:"Koch", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. angustifolia + 4 frutas", especies:["angustifolia"], variedades:["Espadín"], notas:"Pechuga con guanábana, sandía, mamey y mango", grado:"45°", ub:"A", tipos:["pechuga"], foto:null},
  {n:19, nombre:"Los Danzantes Espadín", productor:"Karina Abad Rojas", comunidad:"San Pedro Quiatoni", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"1030 msnm · Caballo Sansón · Levaduras nativas · 2018", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:20, nombre:"Koch Festival Mezclate", productor:"Koch", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"Edición especial festival · Joven", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:21, nombre:"Madrecuishe", productor:"Gregorio García (Sabores Intensos)", comunidad:"San Luis Amatlán", region:"Oaxaca", agave:"A. karwinskii (Madrecuishe)", especies:["karwinskii"], variedades:["Madrecuishe"], notas:"12 años · 1520 msnm · Tahona · Sabino · Cobre · 80L", grado:"—", ub:"B", tipos:["monovarietal"], foto:null},
  {n:36, nombre:"7 el Rey Zapoteco Espadín", productor:"Juan Hernández Escobar", comunidad:"Oaxaca", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"Mezcal artesanal joven", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:37, nombre:"Koch Festival Pixelatl Concordia", productor:"Pedro Hernández (Koch)", comunidad:"S. Baltazar Guelavila", region:"Oaxaca", agave:"A. angustifolia", especies:["angustifolia"], variedades:["Espadín"], notas:"Edición especial festival · Joven", grado:"47°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:38, nombre:"Koch El Tepeztate", productor:"Pedro Hernández (Koch)", comunidad:"S. Baltazar Guelavila", region:"Oaxaca", agave:"A. marmorata", especies:["marmorata"], variedades:["Tepeztate"], notas:"100% maguey · Joven", grado:"46.85°", ub:"A", tipos:["monovarietal"], foto:null},
  {n:22, nombre:"Raicilla ensamble 11 agaves", productor:"Tomás Virgen", comunidad:"Chancuellar", region:"Jalisco", agave:"Ixtero verde/amarillo + Enano + Alineño + Cenizo + Peñudo + otros", especies:["ensamble jalisciense"], variedades:["Ixtero verde","Ixtero amarillo","Enano","Alineño","Cenizo","Peñudo","Mezcal negro","Presa grande","Mezcal brocha","Mezcal sierra"], notas:"Mezquite + guamúchil · Filipino con parota", grado:"—", ub:"A", tipos:["ensamble"], foto:null},
  {n:23, nombre:"Santos Juárez ensamble", productor:"Santos Juárez", comunidad:"Tolimán", region:"Jalisco", agave:"Alineño + Cimarrón + Soca", especies:["ensamble jalisciense"], variedades:["Alineño","Cimarrón","Soca"], notas:"Filipino con cobre y parota · 2023", grado:"—", ub:"A", tipos:["ensamble"], foto:null},
  {n:24, nombre:"Ezequiel Pineda ensamble", productor:"Ezequiel Pineda", comunidad:"Tetapán", region:"Jalisco", agave:"Ixtero Amarillo + Cimarrón + Lineño", especies:["ensamble jalisciense"], variedades:["Ixtero amarillo","Cimarrón","Lineño"], notas:"Filipino con cobre y parota", grado:"—", ub:"A", tipos:["ensamble"], foto:null},
  {n:25, nombre:"Brocha / Ixtero Amarillo", productor:"Don Macario (Mezcaloteca)", comunidad:"Jalisco", region:"Jalisco", agave:"angustifolia + rhodacantha", especies:["angustifolia","rhodacantha"], variedades:["Brocha","Ixtero amarillo"], notas:"Alambique cobre con parota", grado:"47.4°", ub:"A", tipos:["ensamble"], foto:null},
  {n:26, nombre:"Ensamble 7 agaves", productor:"Rosario Pineda (Mezonte)", comunidad:"Tetapán", region:"Jalisco", agave:"Ixtero A/V + Cimarrón + Cuchara + Cabestro + Chautezoca", especies:["ensamble jalisciense"], variedades:["Ixtero amarillo","Ixtero verde","Cimarrón","Cuchara","Cabestro","Chautezoca"], notas:"Filipino con parota ahuecada · 2017 · 60L", grado:"—", ub:"B", tipos:["ensamble"], foto:null},
  {n:27, nombre:"Amarillo", productor:"Hildegardo Joya (Mezonte)", comunidad:"Cabo Corrientes", region:"Jalisco", agave:"A. rhodacantha", especies:["rhodacantha"], variedades:["Amarillo"], notas:"Canoa · Montera de bonete · 2018", grado:"47°", ub:"B", tipos:["monovarietal"], foto:null},
  {n:28, nombre:"Chino", productor:"Emilio Vieyra (Mezonte)", comunidad:"Pino Bonito", region:"Michoacán", agave:"A. cupreata", especies:["cupreata"], variedades:["Chino"], notas:"Filipino con montera de pino · 2025", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:29, nombre:"Alto", productor:"Jorge Salinas (Mezonte)", comunidad:"Indaparapeo", region:"Michoacán", agave:"A. inaequidens", especies:["inaequidens"], variedades:["Alto"], notas:"Fermentado con pulque · Filipino con oyamel", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:30, nombre:"Alto", productor:"Emilio Vieyra (Mezonte)", comunidad:"Pino Bonito", region:"Michoacán", agave:"A. inaequidens", especies:["inaequidens"], variedades:["Alto"], notas:"Agua tridestilada · Filipino con pino · 2017", grado:"—", ub:"B", tipos:["monovarietal"], foto:null},
  {n:31, nombre:"Cenizo", productor:"Emilio Vieyra (Mezonte)", comunidad:"Pino Bonito", region:"Michoacán", agave:"Cenizo (sp.)", especies:["cenizo"], variedades:["Cenizo"], notas:"Filipino con montera de pino · 2023", grado:"—", ub:"B", tipos:["monovarietal"], foto:null},
  {n:32, nombre:"Cupreata Silvestre (lote A)", productor:"Emilio Vieyra (Mezonte)", comunidad:"Pino Bonito", region:"Michoacán", agave:"A. cupreata silvestre", especies:["cupreata"], variedades:["Cupreata silvestre"], notas:"Filipino con montera de pino", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:33, nombre:"Cupreata Silvestre (lote B)", productor:"Emilio Vieyra (Mezonte)", comunidad:"Pino Bonito", region:"Michoacán", agave:"A. cupreata silvestre", especies:["cupreata"], variedades:["Cupreata silvestre"], notas:"Filipino con montera de pino · 2024", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:34, nombre:"Masparillo", productor:"Antonio Flores (Mezonte)", comunidad:"Sierra Tepehuana", region:"Durango", agave:"A. bovicornuta / maximiliana", especies:["bovicornuta/maximiliana"], variedades:["Masparillo"], notas:"Filipino con cobre, pino y quiote · 2024", grado:"—", ub:"A", tipos:["monovarietal"], foto:null},
  {n:35, nombre:"Cenizo", productor:"Clemencia Mendoza (Mezonte)", comunidad:"Sierra Tepehuana", region:"Durango", agave:"A. shrevei", especies:["shrevei"], variedades:["Cenizo"], notas:"Fermenta en pilas de pino y barro bajo tierra · Filipino", grado:"—", ub:"B", tipos:["monovarietal"], foto:null},
];

// ============================================================
// STORAGE
// ============================================================
const STORAGE_KEY = 'mezcaloteca_v1';
let mezcales = [];

function loadData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      mezcales = JSON.parse(stored);
      return;
    } catch (e) {
      console.error('Storage corrupto, usando seed', e);
    }
  }
  mezcales = SEED.map(m => ({...m}));
  saveData();
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mezcales));
    updateStorageInfo();
  } catch (e) {
    toast('Error guardando: ' + e.message, true);
  }
}

function updateStorageInfo() {
  const bytes = new Blob([JSON.stringify(mezcales)]).size;
  const kb = (bytes / 1024).toFixed(0);
  document.getElementById('storage-info').textContent = 'base local · ' + kb + ' KB';
}

// ============================================================
// RENDER
// ============================================================
function populateDropdowns() {
  const regiones = [...new Set(mezcales.map(m => m.region))].filter(Boolean).sort();
  const regionSel = document.getElementById('region');
  regionSel.innerHTML = '<option value="">Todas</option>';
  regiones.forEach(r => {
    const o = document.createElement('option');
    o.value = r; o.textContent = r;
    regionSel.appendChild(o);
  });

  const variedades = [...new Set(mezcales.flatMap(m => m.variedades || []))].filter(Boolean).sort((a,b) => a.localeCompare(b, 'es'));
  const varSel = document.getElementById('variedad');
  varSel.innerHTML = '<option value="">Todas</option>';
  variedades.forEach(v => {
    const o = document.createElement('option');
    o.value = v; o.textContent = v;
    varSel.appendChild(o);
  });

  const especies = [...new Set(mezcales.flatMap(m => m.especies || []))].filter(Boolean).sort();
  const espSel = document.getElementById('especie');
  espSel.innerHTML = '<option value="">Todas</option>';
  especies.forEach(e => {
    const o = document.createElement('option');
    o.value = e; o.textContent = e;
    espSel.appendChild(o);
  });

  const productores = [...new Set(mezcales.map(m => (m.productor || '').replace(/\s*\([^)]*\)/g, '').trim()))].filter(Boolean).sort((a,b) => a.localeCompare(b, 'es'));
  const prodSel = document.getElementById('productor');
  prodSel.innerHTML = '<option value="">Todos</option>';
  productores.forEach(p => {
    const o = document.createElement('option');
    o.value = p; o.textContent = p;
    prodSel.appendChild(o);
  });

  const dl = (id, items) => {
    const el = document.getElementById(id);
    el.innerHTML = items.map(i => '<option value="' + i.replace(/"/g, '&quot;') + '">').join('');
  };
  dl('dl-productores', productores);
  dl('dl-comunidades', [...new Set(mezcales.map(m => m.comunidad))].filter(Boolean).sort((a,b) => a.localeCompare(b, 'es')));
  dl('dl-variedades', variedades);
  dl('dl-especies', especies);
}

function render() {
  const search = document.getElementById('search').value.toLowerCase().trim();
  const region = document.getElementById('region').value;
  const variedad = document.getElementById('variedad').value;
  const especie = document.getElementById('especie').value;
  const tipo = document.getElementById('tipo').value;
  const productor = document.getElementById('productor').value;
  const ubicacion = document.getElementById('ubicacion').value;

  const filtered = mezcales.filter(m => {
    if (region && m.region !== region) return false;
    if (variedad && !(m.variedades || []).includes(variedad)) return false;
    if (especie && !(m.especies || []).includes(especie)) return false;
    if (tipo && !(m.tipos || []).includes(tipo)) return false;
    if (productor) {
      const limpio = (m.productor || '').replace(/\s*\([^)]*\)/g, '').trim();
      if (limpio !== productor) return false;
    }
    if (ubicacion && m.ub !== ubicacion) return false;
    if (search) {
      const haystack = [
        m.nombre, m.productor, m.comunidad, m.region,
        m.agave, m.notas, ...(m.variedades || [])
      ].join(' ').toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    return true;
  });

  filtered.sort((a, b) => (a.n || 999) - (b.n || 999));

  document.getElementById('count').textContent = filtered.length;
  document.getElementById('total').textContent = mezcales.length;

  const container = document.getElementById('cards');
  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><p>Sin resultados con esos filtros.</p></div>';
    return;
  }

  container.innerHTML = filtered.map(m => renderCard(m)).join('');
}

function esc(str) {
  if (str == null) return '';
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderCard(m) {
  const fotoHtml = m.foto
    ? '<img src="' + esc(m.foto) + '" alt="" onclick="openLightbox(\'' + m.n + '\')">'
    : '<span>sin foto</span>';
  return '<div class="card">' +
    '<div class="card-top">' +
      '<div class="card-photo">' + fotoHtml + '</div>' +
      '<div class="card-main">' +
        '<div class="card-header">' +
          '<div class="card-name"><span class="card-num">' + esc(m.n) + '</span>' + esc(m.nombre) + '</div>' +
          '<div class="card-badges"><span class="badge badge-' + (m.ub === 'A' ? 'alta' : 'baja') + '">' + esc(m.ub) + '</span></div>' +
        '</div>' +
        '<div class="card-origin"><span class="card-region">' + esc(m.region) + '</span>' + (m.comunidad ? ' · ' + esc(m.comunidad) : '') + '</div>' +
      '</div>' +
    '</div>' +
    '<dl class="card-info">' +
      (m.productor ? '<dt>Productor</dt><dd>' + esc(m.productor) + '</dd>' : '') +
      (m.agave ? '<dt>Agave</dt><dd>' + esc(m.agave) + '</dd>' : '') +
      (m.variedades && m.variedades.length ? '<dt>Variedad</dt><dd>' + esc(m.variedades.join(', ')) + '</dd>' : '') +
      (m.grado && m.grado !== '—' ? '<dt>Grado</dt><dd>' + esc(m.grado) + '</dd>' : '') +
    '</dl>' +
    (m.notas ? '<div class="card-notes">' + esc(m.notas) + '</div>' : '') +
    (m.tipos && m.tipos.length ? '<div class="card-tags">' + m.tipos.map(t => '<span class="card-tag">' + esc(t) + '</span>').join('') + '</div>' : '') +
    '<div class="card-actions">' +
      '<button class="card-action" onclick="openEditModal(' + m.n + ')">Editar</button>' +
      '<button class="card-action danger" onclick="deleteMezcal(' + m.n + ')">Eliminar</button>' +
    '</div>' +
  '</div>';
}

// ============================================================
// CHIPS INPUT
// ============================================================
function initChipsInput(containerId) {
  const container = document.getElementById(containerId);
  const input = container.querySelector('input');
  let values = [];

  function renderChips() {
    container.querySelectorAll('.chip').forEach(c => c.remove());
    values.forEach((v, idx) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.innerHTML = esc(v) + ' <button type="button" aria-label="Quitar">×</button>';
      chip.querySelector('button').addEventListener('click', () => {
        values.splice(idx, 1);
        renderChips();
      });
      container.insertBefore(chip, input);
    });
  }

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const val = input.value.trim().replace(/,$/, '');
      if (val && !values.includes(val)) {
        values.push(val);
        renderChips();
      }
      input.value = '';
    } else if (e.key === 'Backspace' && input.value === '' && values.length > 0) {
      values.pop();
      renderChips();
    }
  });

  input.addEventListener('blur', () => {
    const val = input.value.trim();
    if (val && !values.includes(val)) {
      values.push(val);
      renderChips();
      input.value = '';
    }
  });

  container.addEventListener('click', (e) => {
    if (e.target === container) input.focus();
  });

  return {
    getValues: () => [...values],
    setValues: (arr) => { values = [...(arr || [])]; renderChips(); },
    clear: () => { values = []; renderChips(); input.value = ''; }
  };
}

let chipsVariedades, chipsEspecies, chipsTipos;

// ============================================================
// FORMULARIO MODAL
// ============================================================
let editingId = null;
let currentPhoto = null;

function openAddModal() {
  editingId = null;
  currentPhoto = null;
  document.getElementById('modal-title').textContent = 'Agregar mezcal';
  document.getElementById('mezcal-form').reset();
  chipsVariedades.clear();
  chipsEspecies.clear();
  chipsTipos.clear();
  updatePhotoPreview(null);
  document.getElementById('f-ub').value = 'A';
  document.getElementById('modal').classList.add('open');
  setTimeout(() => document.getElementById('f-nombre').focus(), 50);
}

function openEditModal(n) {
  const m = mezcales.find(x => x.n === n);
  if (!m) return;
  editingId = n;
  currentPhoto = m.foto || null;
  document.getElementById('modal-title').textContent = 'Editar mezcal #' + n;
  document.getElementById('f-nombre').value = m.nombre || '';
  document.getElementById('f-productor').value = m.productor || '';
  document.getElementById('f-comunidad').value = m.comunidad || '';
  document.getElementById('f-region').value = m.region || '';
  document.getElementById('f-ub').value = m.ub || 'A';
  document.getElementById('f-agave').value = m.agave || '';
  document.getElementById('f-grado').value = m.grado || '';
  document.getElementById('f-num').value = m.n || '';
  document.getElementById('f-notas').value = m.notas || '';
  chipsVariedades.setValues(m.variedades);
  chipsEspecies.setValues(m.especies);
  chipsTipos.setValues(m.tipos);
  updatePhotoPreview(currentPhoto);
  document.getElementById('modal').classList.add('open');
}

function closeModal() {
  document.getElementById('modal').classList.remove('open');
  editingId = null;
  currentPhoto = null;
}

function handleSubmit(e) {
  e.preventDefault();

  const nombre = document.getElementById('f-nombre').value.trim();
  const region = document.getElementById('f-region').value;
  if (!nombre || !region) {
    toast('Faltan campos obligatorios', true);
    return;
  }

  const flushInput = (containerId, chips) => {
    const input = document.getElementById(containerId).querySelector('input');
    if (input.value.trim()) {
      const vals = chips.getValues();
      if (!vals.includes(input.value.trim())) {
        chips.setValues([...vals, input.value.trim()]);
      }
      input.value = '';
    }
  };
  flushInput('chips-variedades', chipsVariedades);
  flushInput('chips-especies', chipsEspecies);
  flushInput('chips-tipos', chipsTipos);

  const data = {
    n: parseInt(document.getElementById('f-num').value) || getNextNumber(),
    nombre,
    productor: document.getElementById('f-productor').value.trim(),
    comunidad: document.getElementById('f-comunidad').value.trim(),
    region,
    ub: document.getElementById('f-ub').value,
    agave: document.getElementById('f-agave').value.trim(),
    grado: document.getElementById('f-grado').value.trim() || '—',
    notas: document.getElementById('f-notas').value.trim(),
    variedades: chipsVariedades.getValues(),
    especies: chipsEspecies.getValues(),
    tipos: chipsTipos.getValues(),
    foto: currentPhoto
  };

  if (editingId !== null) {
    const idx = mezcales.findIndex(m => m.n === editingId);
    if (idx !== -1) {
      if (data.n !== editingId && mezcales.some(m => m.n === data.n)) {
        toast('Ya existe un mezcal con el N° ' + data.n, true);
        return;
      }
      mezcales[idx] = data;
      toast('Actualizado');
    }
  } else {
    if (mezcales.some(m => m.n === data.n)) {
      toast('Ya existe un mezcal con el N° ' + data.n, true);
      return;
    }
    mezcales.push(data);
    toast('Agregado');
  }

  saveData();
  populateDropdowns();
  render();
  closeModal();
}

function getNextNumber() {
  const max = mezcales.reduce((acc, m) => Math.max(acc, m.n || 0), 0);
  return max + 1;
}

function deleteMezcal(n) {
  const m = mezcales.find(x => x.n === n);
  if (!m) return;
  if (!confirm('¿Eliminar "' + m.nombre + '" (#' + n + ')?\n\nNo se puede deshacer.')) return;
  mezcales = mezcales.filter(x => x.n !== n);
  saveData();
  populateDropdowns();
  render();
  toast('Eliminado');
}

// ============================================================
// FOTO: resize y preview
// ============================================================
const MAX_PHOTO_DIM = 400;
const PHOTO_QUALITY = 0.72;

function resizePhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let w = img.width, h = img.height;
        if (w > h) {
          if (w > MAX_PHOTO_DIM) { h = h * MAX_PHOTO_DIM / w; w = MAX_PHOTO_DIM; }
        } else {
          if (h > MAX_PHOTO_DIM) { w = w * MAX_PHOTO_DIM / h; h = MAX_PHOTO_DIM; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', PHOTO_QUALITY));
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function updatePhotoPreview(dataUrl) {
  const preview = document.getElementById('photo-preview');
  if (dataUrl) {
    preview.innerHTML = '<img src="' + dataUrl + '" alt="preview">';
  } else {
    preview.innerHTML = '<span>sin foto</span>';
  }
}

function openLightbox(n) {
  const m = mezcales.find(x => x.n == n);
  if (!m || !m.foto) return;
  document.getElementById('lightbox-img').src = m.foto;
  document.getElementById('lightbox').classList.add('open');
}

// ============================================================
// EXPORT / IMPORT
// ============================================================
function exportJSON() {
  const data = JSON.stringify(mezcales, null, 2);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  a.href = url;
  a.download = 'mezcaloteca_' + date + '.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Backup descargado');
}

function importJSON(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) throw new Error('El archivo no es un array válido');
      const opcion = prompt('¿Cómo importar?\n\nREEMPLAZAR = borra los actuales y usa los del archivo\nAGREGAR = suma los nuevos (mantiene actuales)\n\nEscribí "reemplazar" o "agregar":');
      if (!opcion) return;
      const op = opcion.toLowerCase().trim();
      if (op.startsWith('reemp') || op === 'r') {
        mezcales = data.map(normalize);
      } else if (op.startsWith('agreg') || op === 'a') {
        const existingNs = new Set(mezcales.map(m => m.n));
        let maxN = mezcales.reduce((a, m) => Math.max(a, m.n || 0), 0);
        data.map(normalize).forEach(m => {
          if (existingNs.has(m.n)) m.n = ++maxN;
          mezcales.push(m);
        });
      } else {
        toast('Opción no reconocida — cancelado', true);
        return;
      }
      saveData();
      populateDropdowns();
      render();
      toast('Importados: ' + data.length);
    } catch (err) {
      toast('Error al importar: ' + err.message, true);
    }
  };
  reader.readAsText(file);
}

function normalize(m) {
  return {
    n: m.n,
    nombre: m.nombre || '',
    productor: m.productor || '',
    comunidad: m.comunidad || '',
    region: m.region || '',
    ub: m.ub || 'A',
    agave: m.agave || '',
    grado: m.grado || '—',
    notas: m.notas || '',
    variedades: Array.isArray(m.variedades) ? m.variedades : [],
    especies: Array.isArray(m.especies) ? m.especies : [],
    tipos: Array.isArray(m.tipos) ? m.tipos : [],
    foto: m.foto || null
  };
}

// ============================================================
// TOAST
// ============================================================
let toastTimer = null;
function toast(msg, isError) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('error');
  if (isError) el.classList.add('error');
  el.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// ============================================================
// PWA: service worker + install prompt
// ============================================================
let deferredInstallPrompt = null;

function registerSW() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js')
        .then(reg => console.log('SW registrado:', reg.scope))
        .catch(err => console.warn('SW error:', err));
    });
  }
}

function initInstallPrompt() {
  const banner = document.getElementById('install-banner');
  const btn = document.getElementById('install-btn');
  const close = document.getElementById('close-banner');
  const dismissed = localStorage.getItem('install_dismissed');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (!dismissed) banner.classList.add('show');
  });

  btn.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') toast('Instalada');
    banner.classList.remove('show');
    deferredInstallPrompt = null;
  });

  close.addEventListener('click', () => {
    banner.classList.remove('show');
    localStorage.setItem('install_dismissed', '1');
  });

  window.addEventListener('appinstalled', () => {
    banner.classList.remove('show');
    toast('Mezcaloteca instalada');
  });
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadData();
  chipsVariedades = initChipsInput('chips-variedades');
  chipsEspecies = initChipsInput('chips-especies');
  chipsTipos = initChipsInput('chips-tipos');
  populateDropdowns();
  render();

  ['search', 'region', 'variedad', 'especie', 'tipo', 'productor', 'ubicacion'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener('input', render);
    el.addEventListener('change', render);
  });

  document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('search').value = '';
    document.getElementById('region').value = '';
    document.getElementById('variedad').value = '';
    document.getElementById('especie').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('productor').value = '';
    document.getElementById('ubicacion').value = '';
    render();
  });

  document.getElementById('btn-add').addEventListener('click', openAddModal);
  document.getElementById('btn-export').addEventListener('click', exportJSON);
  document.getElementById('btn-import').addEventListener('click', () => {
    document.getElementById('import-file').click();
  });
  document.getElementById('import-file').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) importJSON(file);
    e.target.value = '';
  });

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('btn-cancel').addEventListener('click', closeModal);
  document.getElementById('mezcal-form').addEventListener('submit', handleSubmit);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  document.getElementById('f-foto').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      currentPhoto = await resizePhoto(file);
      updatePhotoPreview(currentPhoto);
    } catch (err) {
      toast('Error procesando foto', true);
    }
    e.target.value = '';
  });
  document.getElementById('btn-remove-photo').addEventListener('click', () => {
    currentPhoto = null;
    updatePhotoPreview(null);
  });

  document.getElementById('lightbox').addEventListener('click', () => {
    document.getElementById('lightbox').classList.remove('open');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('modal').classList.remove('open');
      document.getElementById('lightbox').classList.remove('open');
    }
  });

  updateStorageInfo();
  registerSW();
  initInstallPrompt();
}

init();
