# 💻 Challenge Amigo Secreto

## 📄 Descripción
Este desafío hace parte de la ruta de Lógica de programación del programa Oracle Next Education; siendo un proyecto para fortalecer las habilidades en JavaScript.

Permite:
- Ingresar nombres de amigos.
- Validar que los nombres sólo contengan letras y espacios.
- Evitar nombres repetidos (sin importar mayúsculas o minúsculas).
- Mostrar la lista de amigos agregados.
- Sortear un amigo al azar.

## 🛠️ Tecnologías usadas
- **JavaScript**: para el desarrollo de la lógica de validación, almacenamiento y sorteo.
- Los archivos **HTML** y **CSS** fueron proporcionados como base.

## 📂 Funcionalidades principales
### 1. Lista de amigos
```javascript
let amigos = [];
```
- Se usa un arreglo para almacenar los nombres de los amigos ingresados.

### 2. Agregar un amigo
```javascript
function agregarAmigo()
```
- Toma el valor ingresado.
- Elimina espacios al inicio y al final (```.trim()```).
- Valida que no esté vacío.
- Valida que sólo contenga letras, acentos y espacios (```validarNombre()```).
- Verifica que no esté repitiendo nombres (sin importar mayúsculas o minúsculas).
- Si pasa las validaciones, lo agrega al array ```amigos``` y actualiza la lista visual.

### 3. Actualizar lista
```javascript
function actualizarListaAmigos()
```
- Recorre el arreglo ```amigos```.
- Crea elementos ```<li>``` para cada nombre.
- Inserta la lista en el elemento HTML.

### 4. Sortear un amigo
```javascript
function sortearAmigo()
```
- Verifica que haya amigos en la lista.
- Selecciona un índice aleatorio.
- Muestra el nombre sorteado.

### 5. Validar nombres
```javascript
function validarNombre(nombre)
```
- Usa una expresión regular (```regex```) que permite:
  - Letras mayúsculas y minúsculas
  - Acentos
  - Espacios
- Retorna ```true``` si es válido, ```false``` si no.

### 6. Limpiar input
```javascript
function limpiarCaja()
```
- Limpia el campo de texto después de agregar un nombre.

## 📋 Reglas de validación
1. No se permiten campos vacíos.
2. Sólo se permiten letras, acentos y espacios.
3. No se permiten nombres repetidos.
4. Los nombres se agregan tal como se ingresan.

## 📷 Ejemplo de uso
1. El usuario escribe ``Lola López``` en el campo de texto.
2. Presiona **Añadir**.
3. El nombre aparece en la lista.
4. Puede seguir agregando más amigos.
5. Al presionar **Sortear Amigo**, aparece un nombre aleatorio de la lista.
