# Stop Pizza — menú web y pedidos por WhatsApp

Web estática responsive con catálogo, elección de tamaño de pizza, carrito, datos de entrega, mensaje de WhatsApp y enlaces a redes sociales/Google Maps.

## 1. Cambiar el número de WhatsApp

1. Abre la carpeta `stop-pizza`.
2. Abre el archivo `config.js` con Bloc de notas, VS Code o cualquier editor de texto.
3. Busca esta línea:

   ```js
   whatsappNumber: "57XXXXXXXXXX",
   ```

4. Sustituye el marcador por el número que recibirá los pedidos. Para Colombia, comienza por `57` y después escribe el celular. Ejemplo ficticio: `573001234567`.
5. No escribas `+`, espacios, guiones ni paréntesis.
6. Guarda el archivo y vuelve a cargar la página.

El teléfono que se configura aquí es el destino de los pedidos, no se muestra públicamente en el menú.

## 2. Cambiar la imagen de portada

Dentro de `config.js`, cambia:

```js
heroImage: "",
```

Por ejemplo:

```js
heroImage: "images/portada.jpg",
```

Guarda la foto con ese nombre dentro de la carpeta `images`.

## 3. Cambiar la foto de un producto

Las imágenes se pueden cambiar individualmente desde `config.js`, sin editar `app.js` ni `styles.css`.

Ejemplo para la pizza Hawaiana:

```js
productImages: {
  "hawaiiana": "images/hawaiana.jpg",
  "pepperoni": "images/pepperoni.jpg"
}
```

En el archivo ya están listados todos los 48 productos. Solo reemplaza las comillas vacías del producto que quieras cambiar. Ejemplo:

```js
"lasagna-mixta": "images/lasagna-mixta.jpg",
```

### ¿Dónde guardo las fotos?

1. Dentro de la carpeta `stop-pizza`, crea o utiliza la carpeta `images`.
2. Copia allí las fotografías.
3. En `config.js`, escribe la ruta relativa como `images/nombre-de-la-foto.jpg`.
4. Respeta exactamente el nombre y la extensión del archivo, incluyendo mayúsculas y minúsculas.

También puedes pegar una URL directa de una imagen en lugar de una ruta local. Debe ser una dirección que abra el archivo de imagen, no una página de Instagram, Facebook, Google Fotos o una página de Unsplash.

Para mejores resultados, usa fotos horizontales o cuadradas, bien iluminadas, con el plato centrado. Recomendación: JPG o WebP de buena calidad, idealmente entre 400 y 800 KB por fotografía.

### IDs disponibles para las imágenes

| Producto | ID en `config.js` |
|---|---|
| Hawaiana | `hawaiiana` |
| Pollo champiñones | `pollo-champinones` |
| Jamón queso | `jamon-queso` |
| Kábanos | `kabanos` |
| Napolitana | `napolitana` |
| Solo queso | `solo-queso` |
| Solo pollo | `solo-pollo` |
| Bocadillo | `bocadillo` |
| Pepperoni | `pepperoni` |
| Salami | `salami` |
| Pollo jamón | `pollo-jamon` |
| Pollo kabano | `pollo-kabano` |
| Margarita | `margarita` |
| Bocadeli | `bocadeli` |
| Champi-carne | `champi-carne` |
| Maicitos | `maicitos` |
| Maduritos | `maduritos` |
| Maíz pollo | `maiz-pollo` |
| Pollo tocineta | `pollo-tocineta` |
| Vegetariana | `vegetariana` |
| Súper especial | `super-especial` |
| Mamalo | `mamalo` |
| 4 carnes | `cuatro-carnes` |
| Especial de carnes | `especial-carnes` |
| Mexicana | `mexicana` |
| Endiablada | `endiablada` |
| Petete | `petete` |
| Samba especial | `samba-especial` |
| Bolañesa | `bolanesa` |
| Ropa vieja | `ropa-vieja` |
| Lasagna mixta | `lasagna-mixta` |
| Maduritos gratinados | `maduritos-gratinados` |
| Maicitos gratinados | `maicitos-gratinados` |
| Granizado en agua | `granizado-agua` |
| Granizado en leche | `granizado-leche` |
| Limonada natural | `limonada-natural` |
| Limonada cerezada | `limonada-cerezada` |
| Limonada de coco | `limonada-coco` |
| Agua en botella | `agua-botella` |
| Gaseosa personal | `gaseosa-personal` |
| Gaseosa 1.5 L | `gaseosa-15` |
| Jugo Hit personal | `hit-personal` |
| Jugo Hit 1 litro | `hit-litro` |
| Jugo natural de fresa | `jugo-fresa` |
| Jugo natural de lulo | `jugo-lulo` |
| Jugo natural de mora | `jugo-mora` |
| Jugo natural de maracuyá | `jugo-maracuya` |
| Jugo natural de mango | `jugo-mango` |

## 4. Cómo probarlo

Abre `index.html` en el navegador, añade productos, abre el carrito, completa los datos de entrega y genera el pedido. Comprueba que WhatsApp abre el chat correcto y que el texto incluye los productos y datos esperados. No envíes el pedido hasta confirmar la información.

## 5. Antes de publicar

- Configura el WhatsApp real del restaurante.
- Confirma el precio de los cinco jugos naturales, que no aparece en el menú físico.
- Confirma el costo y cobertura del domicilio. El proyecto lo deja como “por confirmar” y no lo suma al subtotal.
- Sustituye las fotografías ilustrativas por fotografías propias o aprobadas por Stop Pizza.
- Verifica que los enlaces de Instagram y Facebook correspondan a las cuentas del negocio.

## 6. Publicar

Sube la carpeta `stop-pizza` completa a GitHub Pages, Netlify, Vercel o al hosting del restaurante. No subas solamente `index.html`: también se necesitan `config.js`, `app.js`, `styles.css` y la carpeta `images` si agregaste fotografías locales.

## 7. Datos del restaurante

Stop Pizza, Cra. 1B #58-03, Comuna 5, Cali, Valle del Cauca, Colombia.

- Google Maps: https://maps.app.goo.gl/gQ5aa71954fQAXUE8?g_st=ac
- Reseñas: https://search.google.com/local/writereview?placeid=ChIJW1WP7NOnMI4RKrXjAfh2iYI
- Instagram: https://www.instagram.com/stop_pizzeria?gwpx=MWI5MHphMXk5MzRnZA==
- Facebook: https://www.facebook.com/share/14uT7ZCrUSw/
