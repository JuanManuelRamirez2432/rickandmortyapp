# Documento de Pruebas Funcionales  
**Proyecto:** Rick and Morty - Visor de Personajes  
**Autor:** Juan Manuel Ramirez  
**Fecha:** 2025-07-16

---

## 1. Objetivo  
Verificar que la aplicacion funcione correctamente segun los requisitos funcionales minimos y agregar nuevas funcionalidades 
que den un mejor contraste y desarrollo a la aplicacion.

---

## 2. Entorno de Pruebas  
- Navegador: Chrome (ultima version)  
- Sistema Operativo: Windows 10  
- Resolucion de pantalla: 1920x1080  
- Version de Node.js: v22.17.0 
- Version de npm: 10.9.2

---

## 3. Casos de Prueba  

| Caso de Prueba      | Descripcion                         | Accion                     | Resultado Esperado                           | Resultado Obtenido | Estado (OK/Fail) |
|---------------------|-----------------------------------|----------------------------|---------------------------------------------|--------------------|------------------|
| 1. Carga de personajes | Al iniciar la app, se deben mostrar personajes | Abrir la app               | Personajes cargados y visibles con imagen y datos |                    |                  |
| 2. Filtrado          | Buscar personajes por nombre, especie o estado | Escribir texto en el filtro | La lista muestra solo personajes que coinciden con el filtro |                    |                  |
| 3. Votacion Like     | Votar "Like" a un personaje        | Click en boton Like         | El puntaje del personaje aumenta en 1       |                    |                  |
| 4. Votacion Dislike  | Votar "Dislike" a un personaje     | Click en boton Dislike      | El puntaje del personaje disminuye en 1     |                    |                  |
| 5. Persistencia local| Recargar pagina y mantener votos   | Recargar navegador          | Los puntajes se mantienen igual tras recarga |                    |                  |
| 6. Contadores globales| Mostrar totales de likes y dislikes | Votar a varios personajes   | Los contadores globales reflejan la suma correcta |                    |                  |
| 7. Responsive        | Ver app en movil o tamaño reducido | Cambiar tamaño ventana o usar movil | La galeria se adapta y mantiene funcionalidad |                    |                  |

---

## 4. Resultados de Pruebas  
-Colores estandar
-Se guardan los votos al actualizar o cerrar la pagina
-Contador con funcionalidad estandar y normal
-Buscador preciso
-Problemas al ejecutar con PowerShell(Permisos de ejecución)
-Ejecució normal

---

## 5. Conclusion  
La aplicacion cumple con los requisitos minimos y las funcionalidades adicionales, mostrando buen comportamiento en las pruebas realizadas.
