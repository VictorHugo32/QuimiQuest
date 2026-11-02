const topics = [
  {
    name: 'Estados físicos da matéria',
    items: [
      ['Sólido', 'tem forma e volume definidos.'],
      ['Líquido', 'tem volume definido e assume a forma do recipiente.'],
      ['Gasoso', 'não tem forma nem volume definidos.'],
      ['Fusão', 'é a passagem do estado sólido para o líquido.'],
      ['Solidificação', 'é a passagem do estado líquido para o sólido.'],
      ['Vaporização', 'é a passagem do estado líquido para o gasoso.'],
      ['Condensação', 'é a passagem do estado gasoso para o líquido.'],
      ['Sublimação', 'é a passagem direta do sólido para o gasoso.'],
      ['Ressublimação', 'é a passagem direta do gasoso para o sólido.'],
      ['Evaporação', 'é uma vaporização lenta que ocorre na superfície do líquido.'],
      ['Ebulição', 'é uma vaporização rápida que ocorre em todo o líquido.'],
      ['Calefação', 'é uma vaporização muito rápida sobre uma superfície aquecida.'],
      ['Temperatura de fusão', 'é a temperatura em que uma substância passa de sólido a líquido.'],
      ['Pressão atmosférica', 'pode alterar a temperatura de ebulição de um líquido.'],
    ],
  },
  {
    name: 'Substâncias e misturas',
    items: [
      ['Substância pura', 'tem composição química definida e propriedades características.'],
      ['Mistura', 'é formada pela combinação de duas ou mais substâncias.'],
      ['Mistura homogênea', 'apresenta uma única fase visível.'],
      ['Mistura heterogênea', 'apresenta duas ou mais fases visíveis.'],
      ['Fase', 'é cada porção visualmente uniforme de um sistema.'],
      ['Componente', 'é cada substância que participa de uma mistura.'],
      ['Substância simples', 'é formada por átomos de um único elemento químico.'],
      ['Substância composta', 'é formada por átomos de dois ou mais elementos químicos.'],
      ['Água destilada', 'é considerada uma substância pura, em condições ideais.'],
      ['Ar atmosférico', 'é uma mistura homogênea de gases, em condições usuais.'],
      ['Água e óleo', 'formam uma mistura heterogênea de duas fases.'],
      ['Água com sal dissolvido', 'forma uma mistura homogênea quando todo o sal se dissolve.'],
      [
        'Liga metálica',
        'é uma mistura homogênea que contém dois ou mais elementos, ao menos um deles metálico.',
      ],
      ['Sistema trifásico', 'apresenta três fases distintas.'],
    ],
  },
  {
    name: 'Estrutura do átomo',
    items: [
      ['Próton', 'é uma partícula de carga positiva que fica no núcleo.'],
      ['Nêutron', 'é uma partícula sem carga elétrica que fica no núcleo.'],
      ['Elétron', 'é uma partícula de carga negativa encontrada na eletrosfera.'],
      ['Núcleo atômico', 'concentra prótons e nêutrons e quase toda a massa do átomo.'],
      ['Eletrosfera', 'é a região ao redor do núcleo onde há elétrons.'],
      ['Número atômico (Z)', 'corresponde ao número de prótons do átomo.'],
      ['Número de massa (A)', 'corresponde à soma de prótons e nêutrons.'],
      ['Átomo neutro', 'tem o mesmo número de prótons e elétrons.'],
      ['Cátion', 'é um íon positivo formado quando um átomo perde elétrons.'],
      ['Ânion', 'é um íon negativo formado quando um átomo ganha elétrons.'],
      ['Isótopos', 'são átomos do mesmo elemento com diferentes números de nêutrons.'],
      ['Isóbaros', 'são átomos de elementos diferentes com o mesmo número de massa.'],
      ['Isótonos', 'são átomos com o mesmo número de nêutrons.'],
      ['Massa do elétron', 'é muito menor que a massa de um próton ou nêutron.'],
    ],
  },
  {
    name: 'Modelos atômicos',
    items: [
      ['Dalton', 'propôs que a matéria era formada por átomos maciços e indivisíveis.'],
      ['Thomson', 'descobriu o elétron e propôs o modelo conhecido como pudim de passas.'],
      ['Rutherford', 'propôs um núcleo pequeno e positivo com elétrons ao redor.'],
      [
        'Rutherford e o experimento da lâmina de ouro',
        'observaram o desvio de algumas partículas alfa.',
      ],
      ['Bohr', 'propôs níveis de energia definidos para os elétrons.'],
      ['Modelo de Dalton', 'representa o átomo como uma esfera maciça.'],
      ['Modelo de Thomson', 'representa elétrons incrustados em uma massa positiva.'],
      ['Modelo nuclear de Rutherford', 'concentra a carga positiva em um núcleo pequeno.'],
      [
        'Níveis de energia de Bohr',
        'permitem que elétrons ocupem estados energéticos específicos.',
      ],
      [
        'Excitação eletrônica',
        'ocorre quando um elétron absorve energia e salta para um nível maior.',
      ],
      ['Emissão de energia', 'pode ocorrer quando um elétron retorna a um nível menor.'],
      ['Espectros de linhas', 'são evidências de que a energia dos elétrons é quantizada.'],
      ['Modelo quântico atual', 'descreve regiões de probabilidade para localizar elétrons.'],
      ['Evolução dos modelos', 'acompanha novas evidências experimentais sobre o átomo.'],
    ],
  },
  {
    name: 'Separação de misturas',
    items: [
      ['Filtração', 'separa um sólido insolúvel de um líquido usando um filtro.'],
      ['Decantação', 'separa fases com densidades diferentes após repouso.'],
      ['Funil de separação', 'é usado para separar líquidos imiscíveis, como água e óleo.'],
      ['Evaporação', 'pode recuperar um sólido dissolvido ao remover o solvente.'],
      [
        'Destilação simples',
        'separa um sólido dissolvido de um líquido e permite condensar o vapor.',
      ],
      [
        'Destilação fracionada',
        'separa líquidos miscíveis com diferentes temperaturas de ebulição.',
      ],
      [
        'Centrifugação',
        'acelera a separação de componentes com densidades diferentes por rotação.',
      ],
      ['Peneiração', 'separa sólidos de tamanhos diferentes com uma peneira.'],
      ['Imantação', 'separa materiais atraídos por um ímã.'],
      ['Catação', 'separa manualmente sólidos diferentes.'],
      ['Flotação', 'separa sólidos com diferentes comportamentos em um líquido.'],
      ['Ventilação', 'usa uma corrente de ar para separar sólidos de massas diferentes.'],
      ['Levigação', 'usa uma corrente de água para separar sólidos de densidades diferentes.'],
      ['Cristalização', 'obtém cristais de um soluto a partir de uma solução.'],
    ],
  },
  {
    name: 'Fenômenos físicos e químicos',
    items: [
      ['Fenômeno físico', 'altera o estado ou a forma sem formar uma nova substância.'],
      ['Fenômeno químico', 'forma uma ou mais substâncias com propriedades diferentes.'],
      ['Derretimento do gelo', 'é um fenômeno físico, pois continua sendo água.'],
      ['Queima de madeira', 'é um fenômeno químico, pois forma novas substâncias.'],
      ['Ferrugem', 'é produto de uma transformação química do ferro.'],
      ['Dissolução de açúcar em água', 'é geralmente considerada uma transformação física.'],
      ['Cozimento de um ovo', 'envolve transformações químicas nas proteínas.'],
      ['Quebra de um copo', 'é uma mudança física, sem formação de nova substância.'],
      ['Efervescência em uma reação', 'pode indicar a formação de um gás.'],
      ['Mudança de cor em uma reação', 'pode indicar a formação de novas substâncias.'],
      ['Reagentes', 'são as substâncias consumidas em uma reação química.'],
      ['Produtos', 'são as substâncias formadas em uma reação química.'],
      [
        'Conservação da massa',
        'indica que a massa total se conserva em uma reação química fechada.',
      ],
      ['Fotossíntese', 'é uma transformação química que produz glicose e oxigênio.'],
    ],
  },
  {
    name: 'Ligações químicas',
    items: [
      ['Ligação iônica', 'envolve transferência de elétrons e atração entre íons.'],
      ['Ligação covalente', 'envolve compartilhamento de pares de elétrons.'],
      ['Ligação metálica', 'envolve cátions metálicos e elétrons deslocalizados.'],
      ['Cloreto de sódio (NaCl)', 'é um composto formado predominantemente por ligação iônica.'],
      ['Molécula de água (H₂O)', 'possui ligações covalentes entre hidrogênio e oxigênio.'],
      [
        'Regra do octeto',
        'descreve a tendência de muitos átomos de completar oito elétrons na camada de valência.',
      ],
      ['Elétrons de valência', 'são os elétrons da camada mais externa do átomo.'],
      ['Cátion de sódio (Na⁺)', 'forma-se quando o sódio perde um elétron.'],
      ['Ânion cloreto (Cl⁻)', 'forma-se quando o cloro ganha um elétron.'],
      ['Ligação covalente simples', 'compartilha um par de elétrons.'],
      ['Ligação covalente dupla', 'compartilha dois pares de elétrons.'],
      [
        'Condutividade elétrica dos metais',
        'é favorecida pela mobilidade dos elétrons deslocalizados.',
      ],
      ['Composto iônico sólido', 'é formado por uma rede ordenada de íons.'],
      ['Polaridade de uma ligação', 'depende da diferença de eletronegatividade entre os átomos.'],
    ],
  },
  {
    name: 'Distribuição eletrônica',
    items: [
      ['Princípio de Aufbau', 'orienta o preenchimento dos subníveis de menor para maior energia.'],
      [
        'Princípio da exclusão de Pauli',
        'permite no máximo dois elétrons por orbital, com spins opostos.',
      ],
      [
        'Regra de Hund',
        'orienta o preenchimento individual dos orbitais de mesma energia antes do pareamento.',
      ],
      ['Subnível s', 'comporta até dois elétrons.'],
      ['Subnível p', 'comporta até seis elétrons.'],
      ['Subnível d', 'comporta até dez elétrons.'],
      ['Subnível f', 'comporta até quatorze elétrons.'],
      ['Orbital', 'é uma região de alta probabilidade de encontrar um elétron.'],
      ['Camada eletrônica', 'corresponde a um nível principal de energia.'],
      ['Distribuição do oxigênio (Z=8)', 'é 1s² 2s² 2p⁴ no estado fundamental.'],
      ['Distribuição do sódio (Z=11)', 'é 1s² 2s² 2p⁶ 3s¹ no estado fundamental.'],
      ['Elétron mais energético', 'ocupa o subnível de maior energia preenchido na configuração.'],
      ['Camada de valência', 'é a camada ocupada mais externa do átomo.'],
      ['Diagrama de Linus Pauling', 'ajuda a ordenar subníveis pela energia crescente.'],
    ],
  },
  {
    name: 'Tabela periódica',
    items: [
      ['Período', 'é uma linha horizontal da tabela periódica.'],
      ['Grupo ou família', 'é uma coluna vertical da tabela periódica.'],
      ['Número atômico crescente', 'é a ordem usada na organização moderna dos elementos.'],
      ['Metais alcalinos', 'ocupam o grupo 1, exceto o hidrogênio.'],
      ['Metais alcalino-terrosos', 'ocupam o grupo 2 da tabela periódica.'],
      ['Halogênios', 'ocupam o grupo 17 e tendem a formar ânions de carga −1.'],
      ['Gases nobres', 'ocupam o grupo 18 e têm baixa reatividade em condições usuais.'],
      ['Elemento representativo', 'pertence aos grupos 1, 2 ou 13 a 18.'],
      ['Elemento de transição', 'ocupa os grupos centrais da tabela periódica.'],
      ['Raio atômico', 'tende a aumentar ao descer um grupo.'],
      ['Eletronegatividade', 'tende a aumentar da esquerda para a direita em um período.'],
      [
        'Energia de ionização',
        'é a energia necessária para remover um elétron de um átomo gasoso.',
      ],
      ['Símbolo químico', 'é uma abreviação padronizada para representar um elemento.'],
      ['Elemento químico', 'é definido pelo número de prótons de seus átomos.'],
    ],
  },
  {
    name: 'Soluções e concentração',
    items: [
      ['Solução', 'é uma mistura homogênea de soluto e solvente.'],
      ['Soluto', 'é a substância dissolvida, geralmente em menor proporção.'],
      ['Solvente', 'é a substância que dissolve o soluto, geralmente em maior proporção.'],
      ['Concentração comum', 'é a massa de soluto dividida pelo volume da solução.'],
      ['Concentração molar', 'é a quantidade de matéria do soluto por volume da solução.'],
      ['Dissolução', 'é a dispersão das partículas do soluto pelo solvente.'],
      ['Solução saturada', 'contém a quantidade máxima de soluto dissolvida nas condições dadas.'],
      [
        'Solução insaturada',
        'contém menos soluto que o limite de solubilidade nas condições dadas.',
      ],
      ['Solubilidade', 'indica a quantidade máxima de soluto que se dissolve em certas condições.'],
      [
        'Diluição',
        'diminui a concentração ao adicionar solvente, sem alterar a quantidade de soluto.',
      ],
      ['Soluto em excesso', 'permanece sem dissolver quando se ultrapassa a solubilidade.'],
      ['g/L', 'é uma unidade comum de concentração em massa por volume.'],
      ['Mol', 'é a unidade SI da quantidade de matéria.'],
      ['Curva de solubilidade', 'mostra como a solubilidade varia com a temperatura.'],
    ],
  },
];
const levelSelect = document.querySelector('#level-select');
topics.forEach((t, i) => {
  const o = document.createElement('option');
  o.value = i;
  o.textContent = `Nível ${String(i + 1).padStart(2, '0')} · ${t.name}`;
  levelSelect.append(o);
});
const $ = (s) => document.querySelector(s),
  STORE = 'quimiquest.v1',
  LEGACY_STORE = 'quimidesafio.v1';
let game = null,
  toastTimer;
function load() {
  try {
    const saved = localStorage.getItem(STORE) ?? localStorage.getItem(LEGACY_STORE);
    return JSON.parse(saved) || { rooms: [], results: [] };
  } catch {
    return { rooms: [], results: [] };
  }
}
function save(data) {
  localStorage.setItem(STORE, JSON.stringify(data));
}
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}
function showView(name) {
  document.body.classList.toggle('is-landing', name === 'inicio');
  document
    .querySelectorAll('.view')
    .forEach((v) => v.classList.toggle('active', v.id === `view-${name}`));
  document
    .querySelectorAll('.nav-link')
    .forEach((b) => b.classList.toggle('active', b.dataset.view === name));
  if (name === 'professor') renderResults();
}
document
  .querySelectorAll('[data-view]')
  .forEach((b) => b.addEventListener('click', () => showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach((b) =>
  b.addEventListener('click', () => {
    if (!musicChoiceMade && !musicEnabled) startMusic();
    showView(b.dataset.go);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  })
);
function makeQuestions(level) {
  const entries = topics[level].items;
  return entries
    .map(([term, definition], i) => {
      const distractors = [1, 2, 3].map((n) => {
        const [otherTerm, otherDefinition] = entries[(i + n * 3 + 1) % entries.length];
        return { term: otherTerm, definition: otherDefinition };
      });
      const answers = [{ term, definition }, ...distractors].sort(() => Math.random() - 0.5);
      return {
        term,
        prompt: 'Qual afirmação descreve corretamente ' + term + '?',
        answers,
        correct: answers.findIndex((answer) => answer.term === term),
      };
    })
    .sort(() => Math.random() - 0.5);
}
$('#start-game').addEventListener('click', () => {
  if (!musicChoiceMade && !musicEnabled) startMusic();
  const name = $('#student-name').value.trim();
  if (!name) {
    $('#student-name').focus();
    toast('Digite um nome de jogador para continuar.');
    return;
  }
  const code = $('#room-code').value.trim().toUpperCase();
  if (code && !load().rooms.some((r) => r.code === code)) {
    toast('Não encontramos essa sala. Confira o código com seu professor.');
    $('#room-code').focus();
    return;
  }
  game = {
    name,
    code,
    level: Number(levelSelect.value),
    questions: makeQuestions(Number(levelSelect.value)),
    index: 0,
    score: 0,
    locked: false,
  };
  $('#result-panel').classList.add('hidden');
  $('#game-panel').classList.remove('hidden');
  renderQuestion();
  $('#game-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
function renderQuestion() {
  if (!game) return;
  const q = game.questions[game.index],
    n = game.index + 1;
  $('#game-panel').innerHTML =
    `<div class="game-top"><span>NÍVEL ${game.level + 1} · ${topics[game.level].name}</span><span>${n} / 14</span></div><div class="game-progress"><i style="width:${(game.index / 14) * 100}%"></i></div><h2 class="question">${q.prompt}</h2><div class="answers">${q.answers.map((a, i) => `<button class="answer-btn" data-answer="${i}">${String.fromCharCode(65 + i)}. ${escapeHTML(a.definition)}</button>`).join('')}</div><div class="feedback" aria-live="polite"></div><div class="game-bottom"><span>✦ ${game.score} ${game.score === 1 ? 'acerto' : 'acertos'} até agora</span><span>Escolha uma alternativa</span></div>`;
  document
    .querySelectorAll('[data-answer]')
    .forEach((b) => b.addEventListener('click', () => answer(Number(b.dataset.answer))));
}
function answer(selected) {
  if (game.locked) return;
  game.locked = true;
  const q = game.questions[game.index];
  const buttons = [...document.querySelectorAll('.answer-btn')];
  buttons.forEach((button, i) => {
    button.disabled = true;
    if (i === q.correct) button.classList.add('correct');
    if (i === selected && i !== q.correct) button.classList.add('wrong');
  });

  const correctAnswer = q.answers[q.correct];
  const selectedAnswer = q.answers[selected];
  const feedback = $('#game-panel .feedback');
  if (selected === q.correct) {
    game.score++;
    feedback.innerHTML =
      '<div class="feedback-card feedback-correct">' +
      '<strong>✓ Resposta correta!</strong>' +
      '<p><b>' +
      escapeHTML(correctAnswer.term) +
      ':</b> ' +
      escapeHTML(correctAnswer.definition) +
      '</p>' +
      '<p>Essa definição descreve o conceito perguntado.</p>' +
      '</div>';
  } else {
    feedback.innerHTML =
      '<div class="feedback-card feedback-incorrect">' +
      '<strong>✕ Por que sua resposta está errada?</strong>' +
      '<p>“' +
      escapeHTML(selectedAnswer.definition) +
      '” descreve <b>' +
      escapeHTML(selectedAnswer.term) +
      '</b>, e não ' +
      escapeHTML(q.term) +
      '.</p>' +
      '</div>' +
      '<div class="feedback-card feedback-correct">' +
      '<strong>✓ Qual é a resposta certa?</strong>' +
      '<p><b>' +
      escapeHTML(correctAnswer.term) +
      ':</b> ' +
      escapeHTML(correctAnswer.definition) +
      '</p>' +
      '<p>Essa é a definição correta para o conceito da pergunta.</p>' +
      '</div>';
  }

  const continueButton = document.createElement('button');
  continueButton.className = 'btn btn-primary feedback-continue';
  continueButton.textContent = game.index === 13 ? 'Ver resultado →' : 'Continuar →';
  continueButton.addEventListener('click', () => {
    game.index++;
    game.locked = false;
    if (game.index === 14) finishGame();
    else renderQuestion();
  });
  feedback.append(continueButton);
  $('#game-panel .game-bottom span:last-child').textContent =
    'Leia a explicação antes de continuar.';
}
function finishGame() {
  const result = {
    id: Date.now(),
    name: game.name,
    code: game.code || '—',
    level: topics[game.level].name,
    score: game.score,
    total: 14,
    percent: Math.round((game.score / 14) * 100),
    date: new Date().toISOString(),
  };
  const data = load();
  data.results.unshift(result);
  save(data);
  $('#game-panel').classList.add('hidden');
  $('#result-panel').classList.remove('hidden');
  const resultMessage =
    result.score < 7
      ? `Dessa vez não foi tão bem, ${escapeHTML(result.name)}, mas continue praticando!`
      : `Mandou bem, ${escapeHTML(result.name)}!`;
  $('#result-panel').innerHTML =
    `<div class="result-badge">${result.score >= 10 ? '✦' : '⚗'}</div><div class="eyebrow">DESAFIO CONCLUÍDO</div><h2>${resultMessage}</h2><div class="result-score">${result.score}<span style="font-size:20px;color:#9eacbf"> / 14</span></div><p>Você acertou ${result.percent}% das questões de <b>${escapeHTML(result.level)}</b>.</p><div class="result-actions"><button class="btn btn-primary" id="play-again">Jogar outro nível <span>→</span></button><button class="btn btn-outline" id="back-home">Voltar ao início</button></div>`;
  $('#play-again').onclick = () => {
    $('#result-panel').classList.add('hidden');
    $('#game-panel').classList.add('hidden');
    showView('aluno');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  $('#back-home').onclick = () => {
    showView('inicio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  renderResults();
  $('#result-panel').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function escapeHTML(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );
}
function codeGen() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code;
  const rooms = load().rooms;
  do {
    code = Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join(
      ''
    );
  } while (rooms.some((r) => r.code === code));
  return code;
}
$('#create-room').addEventListener('click', () => {
  const name = $('#teacher-name').value.trim();
  if (!name) {
    $('#teacher-name').focus();
    toast('Informe seu nome para criar a sala.');
    return;
  }
  const data = load(),
    room = {
      code: codeGen(),
      teacher: name,
      email: $('#teacher-email').value.trim(),
      created: new Date().toISOString(),
    };
  data.rooms.push(room);
  save(data);
  const box = $('#room-created');
  box.classList.remove('hidden');
  box.innerHTML = `<small>SALA CRIADA · COMPARTILHE ESTE CÓDIGO</small><b>${room.code}</b><button id="copy-code">Copiar código</button>`;
  $('#copy-code').onclick = async () => {
    try {
      await navigator.clipboard.writeText(room.code);
      toast('Código copiado!');
    } catch {
      toast(`Código da sala: ${room.code}`);
    }
  };
  toast('Sala criada com sucesso!');
});
function renderResults() {
  const data = load(),
    filter = $('#filter-room').value.trim().toUpperCase();
  const rows = data.results.filter((r) => !filter || r.code === filter);
  $('#total-results').textContent = data.results.length;
  $('#average-score').textContent = data.results.length
    ? `${Math.round(data.results.reduce((a, r) => a + r.percent, 0) / data.results.length)}%`
    : '—';
  $('#results-list').innerHTML = rows.length
    ? `<div class="result-row header"><span>ALUNO</span><span>NÍVEL</span><span>SALA</span><span>ACERTOS</span></div>${rows.map((r) => `<div class="result-row"><b>${escapeHTML(r.name)}</b><span>${escapeHTML(r.level)}</span><span>${escapeHTML(r.code)}</span><span class="score-pill">${r.score}/${r.total}</span></div>`).join('')}`
    : '<div class="empty-state">Ainda não há resultados para mostrar. Quando alguém concluir um desafio neste dispositivo, o resultado aparecerá aqui.</div>';
}
$('#filter-room').addEventListener('input', renderResults);
$('#export-results').addEventListener('click', () => {
  const rows = load().results;
  if (!rows.length) {
    toast('Ainda não há resultados para exportar.');
    return;
  }
  const csv = [
    ['Aluno', 'Sala', 'Nivel', 'Acertos', 'Total', 'Percentual', 'Data'],
    ...rows.map((r) => [
      r.name,
      r.code,
      r.level,
      r.score,
      r.total,
      `${r.percent}%`,
      new Date(r.date).toLocaleString('pt-BR'),
    ]),
  ]
    .map((row) => row.map((x) => `"${String(x).replaceAll('"', '""')}"`).join(';'))
    .join('\r\n');
  const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8' }),
    a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'resultados-quimiquest.csv';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Arquivo CSV exportado.');
});
renderResults();

const musicTracks = ['Qaudios/The_Molecular_Ascent.mp3', 'Qaudios/The_Bonding_Point.mp3'];
const gameMusic = $('#game-music');
const musicToggle = $('#music-toggle');
const musicStatus = $('#music-status');
let currentTrack = 0;
let musicEnabled = false;
let musicChoiceMade = false;
gameMusic.volume = 0.35;
gameMusic.src = musicTracks[currentTrack];

function updateMusicControl() {
  const trackName = musicTracks[currentTrack]
    .split('/')
    .pop()
    .replace(/\.mp3$/i, '')
    .replaceAll('_', ' ');
  musicToggle.setAttribute('aria-pressed', String(musicEnabled));
  musicToggle.setAttribute('aria-label', musicEnabled ? 'Pausar música' : 'Ativar música');
  musicStatus.textContent = musicEnabled ? 'Repetindo lista · ' + trackName : 'Ativar música';
  musicToggle.classList.toggle('is-playing', musicEnabled);
}

function startMusic() {
  musicEnabled = true;
  updateMusicControl();
  gameMusic.play().catch(() => {
    musicEnabled = false;
    updateMusicControl();
    toast('Não foi possível iniciar a música. Toque no botão para tentar novamente.');
  });
}

musicToggle.addEventListener('click', () => {
  musicChoiceMade = true;
  if (musicEnabled) {
    musicEnabled = false;
    gameMusic.pause();
    updateMusicControl();
  } else {
    startMusic();
  }
});

gameMusic.addEventListener('ended', () => {
  currentTrack = (currentTrack + 1) % musicTracks.length;
  gameMusic.src = musicTracks[currentTrack];
  updateMusicControl();
  if (musicEnabled) startMusic();
});
updateMusicControl();
