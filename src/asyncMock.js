const products = [
  { id: "1", name: "Catnip deshidratado", img: "1-catnip-deshidratado.webp", price: 5100, category: "gatos", description: "La hierba gatera anima a los gatos a jugar, a moverse y hace que se sientan bien. No es adictiva y no les provoca ningún daño.", stock: 25 },
  {id: "2", name: "Arnés para gatos", img: "2-arnes-rojo-gato.jpg", price: 22300, category: "gatos", description: "Arnés suave con correa elástica. Perímetro regulable: de 24 a 42 cm. Correa elástica: 1.20 m. Hecho de malla de alta calidad y nylon. Colores negro o rojo.", stock: 4},
  {id: "3", name: "Plato comedero plástico", img: "3-plato-comedero-plastico.png", price: 1750, category: "otros", description: "Comederos plásticos de varios colores, ideales para las comidas diarias. Consultar por colores y tamaños disponibles.", stock: 13},
  {id: "4", name: "Alimento Pedigree cachorro 1.5 kg", img: "4-alimento-balanceado-perro-cachorro.webp", price: 4300, category: "perros", description: "Alimento balanceado para cachorros de 2 a 18 meses. Sabor carne, pollo y cereales.", stock: 6},
  {id: "5", name: "Alimento Pedigree adulto raza pequeña 1.5 kg", img: "5-alimento-balanceado-perro-razas-pequeñas.webp", price: 4500, catergory: "perros", description: "Alimento balanceado para perros adultos de 12 meses a 7 años. Razas pequeñas. Sabor carne, pollo y cereales.", stock: 5},
  {id: "6", name: "Alimento Pedigree adulto 1.5 kg", img: "6-alimento-balanceado-perro-adulto.webp", price: 4400, category: "perros", description: "Alimento balanceado para perros adultos de 12 meses a 7 años. Sabor carne y vegetales.", stock: 7},
  {id: "7", name: "Alimento Agility Urinary 1.5 kg", img: "7-alimento-balanceado-gato-urinary.webp", price: 7300, category: "gatos", description: "Alimento balanceado para gatos de más de 12 meses. Control de pH urinario y bajo contenido de minerales que ayudan a reducir la formación de cristales en la orina.", stock: 5},
  {id: "8", name: "Sardina gatos adultos Agility", img: "8-alimento-humedo-gato-adulto-sardina.webp", price: 2300, category: "gatos", description: "Alimento balanceado completo húmedo, cocido al vapor para gatos adultos. 340 g", stock: 8},
  {id: "9", name: "Rascador Alessia Premium", img: "9-rascador-premium.webp", price: 240000, category: "gatos", description: "Medidas: 50 x 50 x 160 cm. Superficie forrada en felpa. Poste forrado con cuerda de sisal natural. Con caja, cuevas, juguete interactivo y hamaca.", stock: 2},
  {id: "10", name: "Rascador Karlie Flamingo", img: "10-rascador-gato.jpg", price: 13150, category: "gatos", description: "Medidas: 29 x 29 x 39 cm. Los rascadores son la manera ideal para que el gato mantenga sus uñas sanas y fuertes, y de paso evitar que arañe otros objetos del hogar.", stock: 5},
  {id: "11", name: "Pretal Arnés Perro Grande Reforzado XXL", img: "11-pretal-arnes-reforzado-perro-grande.webp", price: 25200, category: "perros", description: "Talle XXL: 40 a 75 kg. Medidas de pecho contorno: 87 a 115 cm. Ajustable. Hebilla plástica con bloqueo. Herrajes metálicos soldados y medialuna superior para enganche de correa. 100% lavable.", stock: 6},
  {id: "12", name: "Kit Pecera Marina Deluxe", img: "12-kit-pecera-marina-deluxe.webp", price: 120500, category: "otros", description: "Acuario de vidrio de 38 litros. Vidrio 8 mm grosor. Filtro con clip Marina Slim S15 con cartuchos de filtro de cambio rápido. Módulo de iluminación LED de efecto natural de larga duración incorporado en la cubierta del acuario. Tamaño: 51.3 cm L x 26 cm W x 32.8 cm H", stock: 6},
  {id: "13", name: "Alimento para canarios Tropmix 1 Kg", img: "13-alimento-para-canarios.webp", price: 5900, category: "otros", description: "Mix de semillas para la alimentación diaria de aves. Su fórmula está pensada para asemejarse a la alimentación natural de estos animales, y al mismo tiempo se encuentra enriquecida con los nutrientes que necesitan para una salud óptima.", stock: 18},
  {id: "14", name: "Hueso soga antiestrés", img: "14-hueso-de-soga-antiestres-perro.webp", price: 6000, category: "perros", description: "Sogas 100% ecológicas hechas con fibras naturales no blanqueadas y pinturas vegetales. Reducen el estrés de la mascota. Lavables y durables. Aptas para todas las razas y mordidas", stock: 10},
]


  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 1500);
      } else {
        reject("No hay productos");
      }
    });
  };
  
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
  
      if (products.length > 0) {
        const product = products.find((p) => p.id == id);
        setTimeout(() => {
          if (!product) {
            reject(`No se encuentra el producto con el id ${id}`);
          } else {
            resolve(product);
          }
        }, 1000);
      } else {
        reject("No hay productos");
      }
    });
  };