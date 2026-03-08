# Contador-Inteligente-em-JS

# 🔢 Contador Inteligente

Um contador interativo desenvolvido com **HTML, CSS e JavaScript**, permitindo incrementar, decrementar e resetar um valor exibido na tela.

Este projeto foi criado como exercício para praticar **manipulação do DOM e eventos em JavaScript**.

---

## 🚀 Funcionalidades

* ➕ Aumentar o valor do contador
* ➖ Diminuir o valor do contador
* 🔄 Resetar o contador para zero
* 🔢 Atualização dinâmica do valor na tela

---

## 🕹️ Como usar

1. Abra o projeto no navegador.
2. Utilize os botões para interagir com o contador:

   * **+** → aumenta o valor
   * **-** → diminui o valor
   * **Reset** → volta o contador para **0**

---

## 🧠 Lógica do projeto

O contador utiliza uma variável para armazenar o valor atual:

```javascript
let valor = 0;
```

Sempre que um botão é pressionado, um **evento de clique** é acionado e o valor é atualizado na interface utilizando:

```javascript
elemento.textContent = valor;
```

---

## 🛠️ Tecnologias utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Vanilla JS)**

---

## 📂 Estrutura do projeto

```bash
contador/
│
├── index.html
├── style.css
└── script.js
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido para praticar:

* manipulação do **DOM**
* uso de **eventos**
* controle de **estado da aplicação**
* interação entre **JavaScript e HTML**
* estilização básica com **CSS**

---

## 📌 Possíveis melhorias

* mudar a cor do número:

  * verde quando positivo
  * vermelho quando negativo
  * branco quando zero
* adicionar botão **+10**
* adicionar limites mínimo e máximo
* adicionar animação ao alterar o número

---

## 👨‍💻 Autor

Desenvolvido por **[ Pablo ]**

GitHub: https://github.com/Pablo-sltv-Dev
