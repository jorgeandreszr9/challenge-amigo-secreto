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

## 🎲 Ejecutar juego
A través de GitHub Pages, está disponible el enlace para ejecutar el proyecto realizado: https://jorgeandreszr9.github.io/challenge-amigo-secreto/

## 📷 Ejemplo de uso
1. El usuario escribe ``Lola López``` en el campo de texto.
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/f119812a-cedb-494a-ae55-24f3ecca6979" />

2. Presiona **Añadir**.
<img width="1919" height="1022" alt="image" src="https://github.com/user-attachments/assets/1b36562b-8103-4daf-b42e-5b7214ece5a9" />

3. El nombre aparece en la lista.
<img width="1919" height="1017" alt="image" src="https://github.com/user-attachments/assets/e424ed44-663f-4dab-854c-52bb1406353a" />

4. Puede seguir agregando más amigos.
<img width="1919" height="1021" alt="image" src="https://github.com/user-attachments/assets/70b07366-aa36-48da-b099-e67fb0df2119" />

5. Al presionar **Sortear Amigo**, aparece un nombre aleatorio de la lista.
<img width="1919" height="1019" alt="image" src="https://github.com/user-attachments/assets/8a84c048-aff1-445c-b605-3322324a3712" />
