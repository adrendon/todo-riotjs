
riot.tag('todo', '<div class="add" onclick="{ showAdd }"><i class="fa fa-plus"></i></div> <div class="title"><h1>{ opts.title }</h1></div> <div class="new-task"><a href="#" class="add-new" onclick="{ add }"><i class="fa fa-plus"></i></a> <input name="input" placeholder="New task"  onkeyup="{ edit }"/> </div> <ul> <li class="row { done: done }" each="{ items.filter(filter) }"> <a class="remove" onclick="{ parent.removeItem }"><i class="fa fa-trash-o"></i></a><a class="completed" onclick="{ parent.toggle }"><i class="fa fa-check"></i></a><span>{ title }</span> </li> </ul>', function(opts) {
  this.items = opts.items

  this.edit = function(e) {
    this.text = e.target.value
    if (e.which == 13)
      this.add()
  }.bind(this)

  this.add = function(e) {
    if (this.text) {
      this.items.push({ title: this.text, done: false })
      this.text = this.input.value = ''
      this.update()
    }
  }.bind(this)

  this.filter = function(item) {
    return !item.hidden
  }.bind(this)

  this.toggle = function(e) {
    var item = e.item
    item.done = !item.done
    return true
  }.bind(this)

  this.removeItem = function(e) {
    var item = e.item
    item.hidden = true
    this.update()
    return true
  }.bind(this)

  this.showAdd = function(e) {
    $(".new-task").slideToggle();
  	  $("#todo-text").focus();
    return true
  }.bind(this)

})

riot.mount('todo', {
  title: "Tareas - Interact",
  items: [
    { title: 'Creación Html - Ofertas', done: false },
    { title: 'Html, Imagenes en Portal', done: false },
    { title: 'Tokens Imagenes en Portal', done: false },
    { title: 'Tokens Ofertas Portal', done: false },
    { title: 'Punto de Interacción en Portal', done: false },
    { title: 'Creación Ofertas Default Portal', done: false },
    { title: 'Creación Zonas en Interact', done: false },
    { title: 'Creación de Puntos de Interacción en Portal', done: false },
    { title: 'Creación de Flowchart', done: false },
    { title: 'Creación de Interaction, Decisión (dbo.customer=valor)', done: false },
    { title: 'Creación de PopulateSeg - Crear segmentos', done: false },
    { title: 'Crear Ofertas - Interact', done: false },
    { title: 'Crear Campaña - Interact', done: false },
    { title: 'Crear Estrategia (Segmentos, Zonas, Ofertas)', done: false },
    { title: 'Implementar Scripts', done: false },
    { title: 'Cambiar Scripts - Dllo-Pdn', done: false },
    { title: 'Desplegar Dllo', done: false },
    { title: 'Probar Ofertas', done: false },
    { title: 'Probar Analitycs', done: false },
    { title: 'Desplegar Pdn', done: false }
  ]
});

$( "ul" ).sortable();