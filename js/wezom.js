const seek = document.querySelector('.seek');
const inp = seek.querySelector('.inpseek');
const btn = document.querySelector('.dropdown');
const sel = document.querySelector('.hid', '.selectdrop');
const butn = document.querySelector('.clfilter');
const inpr = document.querySelector('.inprice');
const slc = document.querySelectorAll('select');
const tab1 = document.querySelector('.tab1');
const tab2 = document.querySelector('.tab2');
const ftab1 = document.querySelector('.ftab1');
const ftab2 = document.querySelector('.ftab2');

const email = document.querySelector('.email');
const subemail = document.querySelector('.leftcont1');
const pem = document.querySelector('.pem');
const sucsub = document.querySelector('.sbmt');
const pass = document.querySelector('.pass');
const phone = document.querySelector('.phone');

const entbtn = document.querySelector('.item1');
const callbtn = document.querySelector('.tocall');
const modalBackdrop1 = document.querySelector(".js-modal-backdrop1");
const modalBackdrop2 = document.querySelector(".js-modal-backdrop2");
const closeModal1 = document.querySelectorAll(".btnclose1");
const closeModal2 = document.querySelectorAll(".btnclose2");
const modalHidden1 = document.querySelector(".modal-hidden1");
const modalHidden2 = document.querySelector(".modal-hidden2");

const txt1 = document.querySelectorAll('.txt1');
const txt2 = document.querySelectorAll('.txt2');
const reaction1 = document.querySelector('.hidden1', '.indic1');
const reaction2 = document.querySelector('.hidden2', '.indic2');

const pattern1 = /\D/
const pattern2 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

entbtn.addEventListener('click', function ent (e) {
	modalHidden1.classList.remove("modal-hidden1")
})
callbtn.addEventListener('click', function call (e) {
	modalHidden2.classList.remove("modal-hidden2")
})
closeModal1.forEach(clModal => 
clModal.addEventListener('click', function tt (e) {
	modalHidden1.classList.add("modal-hidden1")
	}))
closeModal1.forEach(clModal => 
	clModal.addEventListener('click', function tt (e) {
		modalHidden2.classList.add("modal-hidden2")
	}))
closeModal2.forEach(clModal => 
	clModal.addEventListener('click', function tt (e) {
		modalHidden1.classList.add("modal-hidden1")
	}))
closeModal2.forEach(clModal => 
	clModal.addEventListener('click', function tt (e) {
		modalHidden2.classList.add("modal-hidden2")
	}))
modalBackdrop1.addEventListener("click", e => {
	if (modalHidden1 !== event.target) return;
	modalHidden1.classList.add("modal-hidden1")
 });
modalBackdrop2.addEventListener("click", e => {
	if (modalHidden2 !== event.target) return;
	modalHidden2.classList.add("modal-hidden2")
  });
seek.addEventListener('submit', function sbm (e) {
	e.preventDefault();
	if(inp.value.length < 2) {
		alert('Необходимо ввести минимум 2 символа !')
		seek.reset()
	}
})
btn.addEventListener('click', function cl1 (e) {
	sel.classList.toggle('hid')
})
tab1.addEventListener('click', function tb1 (e) {
	if(tab1.classList.contains('tab1')) {
		tab1.classList.replace('tab1','tab2')
		ftab1.classList.replace('ftab1','ftab2')
		tab2.classList.replace('tab2','tab1')
		ftab2.classList.replace('ftab2','ftab1')
	}
})
tab2.addEventListener('click', function tb2 (e) {
	if(tab2.classList.contains('tab1')) {
		tab2.classList.replace('tab1','tab2')
		ftab2.classList.replace('ftab1','ftab2')
		tab1.classList.replace('tab2','tab1')
		ftab1.classList.replace('ftab2','ftab1')
	}
})
inpr.addEventListener('input', function ad (e) {
	if(pattern1.test(inpr.value)) {
		alert('Необходимо ввести только положительное число !')
		inpr.reset()
	}
})
sucsub.addEventListener('submit', function suc (e) {
	if(pattern2.test(pem.value)) {
		alert('Вы успешно подписаны на рассылку !')
	}
		else alert('Невалидный e-mail !')
	         pem.reset()
})
subemail.addEventListener('submit', function ps (e) {
	if(pass.value.length < 4 && pattern2.test(email.value)) {
		alert('Пароль должен быть минимум 4 символа !')
		pass.reset()
	} else if (!pattern2.test(email.value)) {alert('Невалидный e-mail !')}
})
butn.addEventListener('click', function res (e) {
	inpr.value = ""
	slc.forEach(sl => sl.selectedIndex = 0)
})
txt1.forEach(txt1p => {
	txt1p.addEventListener('click', function cl1 (e) {
		event.preventDefault()
		if(reaction1.classList.contains('hidden1')) {
			txt1p.textContent = 'В сравнении'
			reaction1.classList.remove('hidden1')
		}
		   else if (txt1p.textContent !== 'В сравнении' && !reaction1.classList.contains('hidden1')) {
			txt1p.textContent = 'В сравнении'
			reaction1.textContent = `${Number(reaction1.textContent) + 1}`
		   }
})})
txt2.forEach(txt2f => {
	txt2f.addEventListener('click', function cl2 (e) {
		event.preventDefault()
		if(reaction2.classList.contains('hidden2')) {
			txt2f.textContent = 'В избранном'
			reaction2.classList.remove('hidden2')
		}
		   else if (txt2f.textContent !== 'В избранном' && !reaction2.classList.contains('hidden2')) {
			txt2f.textContent = 'В избранном'
			reaction2.textContent = `${Number(reaction2.textContent) + 1}`
		   }
})})
