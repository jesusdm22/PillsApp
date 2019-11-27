# PillsApp
Descripción:
	Se trata de una aplicación con la cual podemos llevar un registro de los
	medicamentos que tenemos que tomar, añadiendo recordatorios, tipo de medicamento, dosis, 
	y descripción del mismo.
	
	Con esto resolvemos la problemática de que por ejemplo a las personas que le lleven los medicamentos 
	a sus familiares de edad más avanzada tengan una fácil gestión de los mismos.


# Equipo:
	-Marcos Ortega Cereceto
	-Cristian Cabrera González
	-Raúl Vázquez Ojeda
	-Jesús Díaz Muñoz (Portavoz)


# Acceso al mockup para ver el diseño por si hay dudas:
	https://wireframepro.mockflow.com/view/M07f104073cfd5f5df7b05028c384dbb51574080008946

# Colores y fuente: 
		Fuente -> Roboto
		Colores: #89d9e1 (Azul)
			 #000000 (Negro)


# Elementos:
	Componentes: (Seguir el mockup de arriba)
		-header
		-calendario
		-lista
		-detalles
		-agregarMedicamento
		-footer
	
	 Clases:
		-medicamento
			·id (number)
			·nombre (string)
			·tipo (tipo)
			·dosis (number)
			·fechaHora (string)
			·descripcion (string)
		-tipo
		   	·id (number)
			·nombre (string)
	Objetos:
		-listaMedicamentos (medicamento)
		-listaUsuario (medicamento)


# Segmentación del trabajo:
	Raul -> 	header, lista
	Marcos -> 	footer, agregarMedicamento
	Cristian ->	detalles, Clase <tipo>
	Jesus ->	calendario, Clase <medicamento>
