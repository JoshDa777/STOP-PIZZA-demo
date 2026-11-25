/*
  CONFIGURACIÓN DE STOP PIZZA
  Puedes editar este archivo con Bloc de notas, VS Code o cualquier editor.


  WHATSAPP:
  Escribe el número completo con indicativo de país, solo dígitos.
  Colombia: 57 + número celular. Ejemplo ficticio: 573001234567
  No escribas +, espacios, guiones ni paréntesis.

  IMÁGENES:
  - Puedes usar una URL directa de imagen (https://...).
  - O guardar la imagen dentro de la carpeta images/ y escribir, por ejemplo:
      "hawaiiana": "images/hawaiana.jpg"
  - Formatos recomendados: .jpg, .jpeg, .png o .webp.
  - El nombre del archivo y la extensión deben coincidir exactamente.
  - Deja "" para conservar la fotografía ilustrativa actual.
*/
window.STOP_PIZZA_CONFIG = {
  whatsappNumber: "573206465606",

  // Imagen grande de portada. Ejemplo: "images/portada.jpg"
  heroImage: "",

  // Cambia cada producto por separado. Deja "" para usar la imagen por defecto.
  productImages: {
    "hawaiiana": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb4YlqF18dc-YYXn7uDNBMOEv8H90uUUycCWRglGFjzzxXq1-fkfJ3hh3&s=10",
    "pollo-champinones": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOHfQhvV6L8jALn-83jNZW-ivA4dhAqdUl6h-Gdu_YGYY0rmB1ltC4O-X&s=10",
    "jamon-queso": "https://www.pizzaspiccolo.com.co//wp-content/uploads/2025/11/pizza-jamon-y-queso-pizzas-piccolo-domicilio-resto-bar-pizzeria.jpg",
    "kabanos": "https://www.pizzaspiccolo.com.co//wp-content/uploads/2025/11/pizza-cabano-pizzas-piccolo-domicilio-resto-bar-pizzeria.jpg",
    "napolitana": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFgi5RIvIvoFUPNXpcsFSIMKunk0W5qDhCswdgWbSd5qrfApXUruFGOk&s=10",
    "solo-queso": "https://cdn.inoutdelivery.com/ppc.inoutdelivery.com/lg/1637778307349-solo%20queso%20inout.jpg",
    "solo-pollo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5T9i0aRRwxGHBZr-QMwJBZ0_7cb4Y1pMYG_FABw9qDnN7HSKliwReCcs&s=10",
    "bocadillo": "https://aprisapizza.com/wp-content/uploads/2022/02/IMG_6731-scaled-e1754067421342.jpg",
    "pepperoni": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8iEhNBu-ajsC18fS3cwHxntO1NY_6aDbSkBceWroitg&s=10",
    "salami": "https://assets-us-01.kc-usercontent.com/e955c883-9cfb-008d-7c9a-d3a70f4578d4/95d82c4f-8cc9-4450-9ab6-f0e902ead03a/Hard%20Salami%20Pizza%20with%20Hot%20Honey.jpg?w=1280&auto=format",
    "pollo-jamon": "https://shopexpress.com.co/www/wp-content/uploads/2021/11/polloranch.png",
    "pollo-kabano": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-JiHCZhpehiZgLKo5esAtHvHt0MIr6iiXAsPoNTH7orMgXo0xyctAFcN&s=10",
    "margarita": "https://imag.bonviveur.com/pizza-margarita.jpg",
    "bocadeli": "https://doggypizza.com/wp-content/uploads/2016/09/v2.jpg",
    "champi-carne": "https://www.palacios.es/palacios/usuariosFtp/conexion/imagenes4303a.jpg",
    "maicitos": "https://www.pizzaspiccolo.com.co//wp-content/uploads/2025/11/pizza-tocineta-maiz-tierno-pizzas-piccolo-domicilio-resto-bar-pizzeria.jpg",
    "maduritos": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHXACYSgbYxxjcDAOyGyS886idTjnswGyyvRv-Avz5bI8JBeQVi4-YtX_&s=10",
    "maiz-pollo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgeabWh-FsQz2OwA4kxz0_JS3VErKez3Uu_YFGJsJ3-RF8u3--D774OKY&s=10",
    "pollo-tocineta": "https://i.pinimg.com/736x/58/3f/f7/583ff74837dc9d9980621d0461578dd7.jpg",
    "vegetariana": "https://papajohns.vtexassets.com/arquivos/ids/158193/VEGETARIANA.jpg.jpg?v=639008844397130000",
    "super-especial": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zjLDUhAq8yNvHYPlIR5f7TsyQcF6A3Z8ziRTuI9grKdxelbcMvehgg&s=10",
    "mamalo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHXACYSgbYxxjcDAOyGyS886idTjnswGyyvRv-Avz5bI8JBeQVi4-YtX_&s=10",
    "cuatro-carnes": "https://www.pizzaspiccolo.com.co//wp-content/uploads/2025/11/pizza-carnes-pizzas-piccolo-domicilio-resto-bar-pizzeria.jpg",
    "especial-carnes": "https://tofuu.getjusto.com/orioneat-local/resized2/sMcvXScRQq2n9nMqR-2400-x.webp",
    "mexicana": "https://cdn7.kiwilimon.com/recetaimagen/36658/640x640/45656.jpg.webp",
    "endiablada": "https://www.pizzaspiccolo.com.co//wp-content/uploads/2025/11/pizza-carnes-pizzas-piccolo-domicilio-resto-bar-pizzeria.jpg",
    "petete": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrC5eVYj4tGGcP4BSfPu4oJawHq4LkmE3xB7byKGTNIyzQAZqjkyo0M3w&s=10",
    "samba-especial": "https://tb-static.uber.com/prod/image-proc/processed_images/81bedb2b72378960a097c5b70936c8db/d03e52b3c8af19d8fa8222e23efd9cfa.jpeg",
    "bolanesa": "https://cdn3.myrealfood.app/recipes%2F0Lsy6MljDc4mcdbrqzWJ%2Fmain.jpg?alt=media&token=470e2d45-38d6-40c2-a572-e8d23ff07273",
    "ropa-vieja": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUGs4sMmdAD97RE7-RVDHnQOMhKOA1jKhPr7uwD_ryG95-0cQ-XheFBE&s=10",
    "lasagna-mixta": "https://alimentosdoria.com/wp-content/uploads/elementor/thumbs/Como-preparar-Lasagna-Mixta-r8wdr2gip6y4xrynmp4iq8cj7lpiwpjzob09qjyfck.jpg",
    "maduritos-gratinados": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfN9ruLuqsq7PXq-hQiB0s22nYlL_S8mq21mvmRknUL_xWbaOfY5PAfBJv&s=10",
    "maicitos-gratinados": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2C7h5nf4QnMj7JHwZsJms5_mCP-ANsVNImjxSwEZicZ3-EOi-Gj4fok&s=10",
    "granizado-agua": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVU7Y67Kd9Cxo4dKaVw_VCYYdeJADcR3JZyUfS7KjCK5GmNAJi1h6SDBS&s=10",
    "granizado-leche": "https://granizadosnaturalesvidal.com/img/lechenueva.jpg",
    "limonada-natural": "https://cdnx.jumpseller.com/magnifique1/image/65465114/thumb/1079/1439?1752774094",
    "limonada-cerezada": "https://www.elespectador.com/wp-content/uploads/elespectador/BADDFXEFSVC7NGRU27DVI4EIWU.jpg",
    "limonada-coco": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXuPs-4EdSgiL7S2GFNAVwgKzRImw9BnPyQubGXDNjubRr7OtVvgsuHM&s=10",
    "agua-botella": "https://png.pngtree.com/png-vector/20250325/ourmid/pngtree-water-bottle-png-image_15868794.png",
    "gaseosa-personal": "https://media.istockphoto.com/id/458408611/es/foto/cl%C3%A1sico-cola-botella.jpg?s=612x612&w=0&k=20&c=wP1bqXB1-0maKBXFdCHroZPWsa3YnouDR9DoWTgcw50=",
    "gaseosa-15": "https://thumbs.dreamstime.com/b/botella-pl%C3%A1stica-del-refresco-carb%C3%B3nico-una-de-soda-la-cola-dos-litros-con-las-gotitas-condensaci%C3%B3n-en-un-fondo-blanco-aislado-151586858.jpg",
    "hit-personal": "https://img.magnific.com/psd-gratis/refrescantes-botellas-jugos-frutas-colores-vibrantes-bebidas-saludables_191095-90304.jpg?semt=ais_hybrid&w=740&q=80",
    "hit-litro": "https://img.magnific.com/fotos-premium/botella-plastico-jugo-naranja-aislado-blanco-trayectoria-recorte_105428-2649.jpg",
    "jugo-fresa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsJ2dsF7dtSoL8rvT2i-LWbNJW4PHFny2ocXRptCrWf_O6kPO877TEfs&s=10",
    "jugo-lulo": "https://vecinavegetariana.com/wp-content/uploads/2022/05/Lulada-Lulo-Drink-Bebida-de-Lulo-Naranjilla-2-500x500.jpg",
    "jugo-mora": "https://alqueriauploads.s3.us-east-1.amazonaws.com/prod/bcm_mb_4d4a82e41a.webp",
    "jugo-maracuya": "https://tofuu.getjusto.com/orioneat-local/resized2/jD6q82BE8umGoS276-2400-x.webp",
    "jugo-mango": "https://www.cocina-colombiana.com/base/stock/Recipe/jugo-de-mango/jugo-de-mango_web.jpg.webp"
  }
};
