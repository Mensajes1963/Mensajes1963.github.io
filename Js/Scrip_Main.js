/*----------------------------lis 1 --------------------------------------------------*/
const main_img = document.querySelector('.main_img')
const thumbnails = document.querySelectorAll('.thumbnail')


thumbnails.forEach(thumb => {
	thumb.addEventListener('click', function(){
		const active = document.querySelector('.active')
		active.classList.remove('active')
		this.classList.add('active')
		main_img.src = this.src
	});
});
/*--------------------------------------------lis 1-------------------------------------------------------------------*/

const control_Derc = document.querySelector('.control_Derc')
const control_Izq = document.querySelector('.control_Izq')
const thumbnail_cdros = document.querySelector('.thumbnail_cdros')

control_Derc.addEventListener('click', () => {
	thumbnail_cdros.scrollLeft -=300
})

control_Izq.addEventListener('click', () => {
	thumbnail_cdros.scrollLeft +=300
})

/*----------------------------lis 2 --------------------------------------------------*/
const main_img_lis2 = document.querySelector('.main_img_lis2')
const thumbnails_lis2 = document.querySelectorAll('.thumbnail_lis2')


thumbnails_lis2.forEach(thumb => {
	thumb.addEventListener('click', function(){
		const active = document.querySelector('.active_lis2')
		active.classList.remove('active_lis2')
		this.classList.add('active_lis2')
		main_img_lis2.src = this.src
	});
});
/*-----------------------------------------------Lis 2----------------------------------------------------------------*/

const control_Derc_lis2 = document.querySelector('.control_Derc_lis2')
const control_Izq_lis2 = document.querySelector('.control_Izq_lis2')
const thumbnail_cdros_lis2 = document.querySelector('.thumbnail_cdros_lis2')

control_Derc_lis2.addEventListener('click', () => {
	thumbnail_cdros_lis2.scrollLeft -=300
})

control_Izq_lis2.addEventListener('click', () => {
	thumbnail_cdros_lis2.scrollLeft +=300
})


/*----------------------------lis 3 --------------------------------------------------*/
const main_img_lis3 = document.querySelector('.main_img_lis3')
const thumbnails_lis3 = document.querySelectorAll('.thumbnail_lis3')


thumbnails_lis3.forEach(thumb => {
	thumb.addEventListener('click', function(){
		const active = document.querySelector('.active_lis3')
		active.classList.remove('active_lis3')
		this.classList.add('active_lis3')
		main_img_lis3.src = this.src
	});
});
/*-----------------------------------------------Lis 3----------------------------------------------------------------*/

const control_Derc_lis3 = document.querySelector('.control_Derc_lis3')
const control_Izq_lis3 = document.querySelector('.control_Izq_lis3')
const thumbnail_cdros_lis3 = document.querySelector('.thumbnail_cdros_lis3')

control_Derc_lis3.addEventListener('click', () => {
	thumbnail_cdros_lis3.scrollLeft -=300
})

control_Izq_lis3.addEventListener('click', () => {
	thumbnail_cdros_lis3.scrollLeft +=300
})

/*----------------------------lis Personalizados --------------------------------------------------*/
const main_img_lisPers = document.querySelector('.main_img_lisPers')
const thumbnails_lisPers = document.querySelectorAll('.thumbnail_lisPers')


thumbnails_lisPers.forEach(thumb => {
	thumb.addEventListener('click', function(){
		const active = document.querySelector('.active_lisPers')
		active.classList.remove('active_lisPers')
		this.classList.add('active_lisPers')
		main_img_lisPers.src = this.src
	});
});
/*-----------------------------------------------Lis Personalizados----------------------------------------------------------------*/

const control_Derc_lisPers = document.querySelector('.control_Derc_lisPers')
const control_Izq_lisPers = document.querySelector('.control_Izq_lisPers')
const thumbnail_cdros_lisPers = document.querySelector('.thumbnail_cdros_lisPers')

control_Derc_lisPers.addEventListener('click', () => {
	thumbnail_cdros_lisPers.scrollLeft -=300
})

control_Izq_lisPers.addEventListener('click', () => {
	thumbnail_cdros_lisPers.scrollLeft +=300
})
/*---------------------------------------------------------------------------------------------------------------*/
/*const evento = document.getElementById('botenv')
const enviarFormulario =() => {
	let nombres = ('nombres').value;
	let apellidos = ('apellidos').value;
	let mensaje = document.getElementById('mensaje').value;
	let numero= +573196265606;
	var wim = window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nombres}%20${apellidos}, Asunto:%20${mensaje}`,'_blank');
}
evento.addEventListener('click', enviarFormulario)*/