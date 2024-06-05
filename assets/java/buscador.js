document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});
const recipes = [
    {
        name: "Chuletas De Cerdo Con Pimientos",
        ingredients: ["2 Chuletas de cerdo", "1 Cebolla roja", "2 Pimientos rojos", "1 Cucharada de azúcar", "3 Cucharadas de vinagre de vino tinto", "Pimienta", "Albahaca","2 dientes de ajo", "Tomillo","Sal", "Mantequilla", "Aceite de oliva"],
        preparation: "En primer lugar, picamos los pimientos y la cebolla. Rehogamos todo en una sartén con aceite muy caliente. Salpimentamos y añadimos una cucharada de azúcar. Cuando todo esté bien pochado añadimos el vinagre, bajamos el fuego y agregamos un poco más de aceite. Cocinamos durante 2 – 3 minutos. Picamos la albahaca y la incorporamos a la sartén. Cuando esté todo bien cocinado, retiramos el contenido de la sartén y lo reservamos. En la misma sartén, cocinamos las chuletas salpimentadas. Condimentamos con el ajo y el tomillo. Añadimos a la sartén un poco de mantequilla y cocinamos hasta que las chuletas estén doradas. Cuando las chuletas estén listas, las retiramos de la sartén y las emplatamos acompañadas de una buena cantidad de los pimientos que hemos cocinado antes. Servimos."
    },
    {
        name: "Ensalada De Judias Verdes Aliñada con Mostaza",
        ingredients: ["1 kg de judías verdes", "200 g de almendras tostadas y fileteadas", "2 cabezas de ajo", "2 cabezas de ajo", "2 cucharadas de mostaza de Dijon", "2 cucharadas de miel", "Aceite de oliva","Sal", "Pimienta"],
        preparation: "Precalentamos el horno a 180ºC. En primer lugar, envolvemos una cabeza de ajo en papel de aluminio y la horneamos durante 2 minutos. Seguidamente, cocemos las judías en agua con sal durante 2 minutos. Cuando estén listas, las escurrimos y las metemos en agua fría para que queden bien crujientes. Retiramos el ajo del horno y sacamos toda su carne. Añadimos el vinagre, la mostaza y la miel. Salpimentamos, incorporamos un chorrito de aceite de oliva y batimos bien. Mezclamos las judías con la vinagreta y añadimos las almendras. Emplatamos y servimos."
    },
    {
        name: "Pollo Relleno De Ajo y Castañas",
        ingredients: ["1 Pollo grande deshuesado", "½ Cebolla", "1 Diente de ajo", "1 tallo de apio", "50 g de piñones", "75 g castañas cocidas","100 g de arroz salvaje", "2 cucharadas de perejil picado","l Pimienta", "Aceite de oliva"],
        preparation: "Precalentamos el horno. En primer lugar vamos a preparar el relleno. Para ello, en una sartén con un chorrito de aceite, rehogamos la cebolla, el ajo y el apio muy picados. Añadimos los piñones y las castañas cocidas troceadas y cocidas. Salpimentamos. Seguidamente incorporamos el perejil picado y el arroz salvaje cocido. Cuando el relleno este listo, los amontonamos en el centro del pollo deshuesado y lo enrollamos. Nos aseguramos de que no se abra atándolo con una cuerda. Horneamos el pollo durante una hora. Pasado este tiempo, fileteamos el pollo. Emplatamos y servimos."
    },
    {
        name: "Pastelitos de Atun Y Especias",
        ingredients: ["400 g de atún en conserva", "6 Castañas de agua enlatadas", "3 Cebolletas", "Jengibre fresco", "3 cucharadas de cilantro picado", "1 Chile rojo", "3 hojas de lima kaffir", "2 cucharaditas de salsa de pescado", "2 Huevos", "Aceite vegetal", "Sal", "Pimienta", "Para la salsa", "Azúcar en polvo", "2 cucharadas de salsa de pescado", "1 cucharada de vinagre de arroz", "½ Limón en zumo", "2 cucharadas de cilantro picado"],
        preparation: "En primer lugar, desmigamos el atún y lo disponemos en un bol. Seguidamente, retiramos las semillas del chile y lo picamos al igual que las castañas de agua, las cebolletas, el cilantro fresco, la lima kaffir. Añadimos todos estos ingredientes al bol en el que tenemos el atún. Además, incorporamos jengibre fresco rallado, salsa de de pescado y dos huevos batidos. Salpimentamos y mezclamos bien todo. Con las manos hacemos bolitas con la mezcla y las aplastamos ligeramente. Freímos nuestros pastelitos en una sartén con aceite muy caliente. Mientras, preparamos la salsa. Para ello mezclamos muy bien todos los ingredientes que la componen. Cuando los pastelitos estén listos, los retiramos de la sartén y los emplatamos. Servimos nuestros pastelitos acompañados de la salsa y... ¡A comer!"
    },
    {
        name: "Farfalles Con Requeson, Panceta Y Guisantes",
        ingredients: ["200 g de pasta farfalle", "125 g de panceta", "1 diente de ajo", "100 g de guisantes congelados", "3 cucharadas de crema fresca", "125 g de requesón", "Aceite de oliva", "Sal", "Pimienta"],
        preparation: "En primer lugar, freímos la panceta picada, cuando esté bien dorada añadimos en ajo picado muy fino. Por otro lado, cocemos la pasta en agua con sal, cuando este casi lista, añadimos los guisantes congelados y los cocemos. Una vez que todo esté en su punto, escurrimos la pasta y los guisantes. Incorporamos la pasta a la sartén donde tenemos la panceta. Añadimos la crema fresca y el requesón. Salpimentamos, cocinamos unos minutos más y servimos."
    },
    {
        name: "Sandwich de Carne",
        ingredients: ["700 g de solomillo de ternera", "1 cabeza de ajo", "3-4 ramitas de tomillo", "Mantequilla", "Unas hojas de lechuga", "½ Cebolla roja", "2 Pimientos rojos", "250 g de tomates cherrys rojos y amarillos", "1-2 cucharaditas de vinagre de jerez", "Albahaca", "3 cucharadas de mayonesa", "3 cucharaditas de mostaza", "12 rebanadas de pan", "Aceite de oliva", "Sal", "Pimienta"],
        preparation: "Precalentamos el horno a 180ºC. En primer lugar, salpimentamos la carne y la marcamos en una sartén con un chorrito de aceite, incorporamos un ajo y el tomillo. Añadimos mantequilla, y vamos rociando la carne con el jugo que obtengamos de la sartén en la sartén. Introducimos la sartén en el horno durante 10 minutos. Por otro lado, picamos la cebolla y el chile y lo sofreímos en una sartén con un chorrito de aceite de oliva. Seguidamente, cortamos los tomates por la mitad y los agregamos a la sartén, salpimentamos. Incorporamos también el vinagre y la albahaca picada. Bajamos el fuego y dejamos que terminen de cocinarse lentamente. A continuación, en un bol mezclamos la mayonesa y la mostaza. Reservamos. Cuando la carne esté en su punto, la fileteamos y tostamos las rebanadas de pan. Para terminar montamos el sándwich: untamos una rebanada de pan con la mezcla de mayonesa y mostaza, ponemos la lechuga encima y colocamos sobre esta la carne, disponemos encima la salsa de tomate y...¡Listo!"
    },
    {
        name: "Tortitas Picantes",
        ingredients: ["1-2 cucharaditas de comino", "1 y ½ de chiles verdes", "2 dientes de ajo", "Jengibre fresco", "125 g de harina de trigo", "1 Huevo grande", "300 ml de leche entera", "1 cucharadita de semillas de mostaza", "½ Cebolla", "1 cucharadita de cúrcuma molida", "4-6 patatas cocidas y peladas", "6 cucharadas de yogur natural", "2 cucharadas de cilantro picado", "Aceite de oliva", "Sal", "Pimienta"],
        preparation: "En primer lugar, tostamos el comino y lo salpimentamos en una sartén caliente. Añadimos un chorrito de aceite e incorporamos el jengibre, el chile y ajo picado. Reservamos. Para el relleno, en una sartén con aceite ponemos las semillas de mostaza, añadimos la cebolla picada muy fina y una cucharadita de cúrcuma. Seguidamente, cortamos las patatas en dados y las distribuimos por la sartén, salpimentamos y cocinamos unos minutos más. Por otro lado, elaboramos la masa de las tortitas. Para ello, añadimos harina a la mezcla de jengibre, chile y ajo. Salpimentamos y agregamos un huevo. Vamos removiendo a la vez que incorporamos leche poco a poco, acompañamos la masa de una cucharadita de aceite. Cuando tengamos la masa lista, cocinamos las tortitas en una sartén con un poco de aceite. Las cocinamos por los dos lados, podemos ayudarnos con una espátula para darles la vuelta. Finalmente rellenamos las tortitas con el guiso de patatas y las enrollamos. Acompañamos las tortitas de una salsa hecha con yogur natural y cilantro picado. Servimos."
    },
    {
        name: "Sencillo Bollito Mixto",
        ingredients: ["6 Salchichas de hinojo italiano", "220 g de chorizo", "3 dientes de ajo", "2 tallos de apio", "2 Zanahorias", "200 g de lentejas verdina", "1 hoja de laurel", "2 ramitas de tomillo", "750 ml de caldo de pollo", "Sal", "Pimienta", "Perejil", "Aceite de oliva"],
        preparation: "En primer lugar, doramos las salchichas en una sartén. Cuando estén listas las retiramos del fuego y reservamos. Seguidamente, cortamos el chorizo en rodajas y lo freímos. Lo reservamos junto a las salchichas. En la misma sartén sofreímos las verduras troceadas, añadimos las lentejas verdina, una hoja de laurel y el tomillo. Después incorporamos las salchichas y el chorizo junto al caldo de pollo. Cocinamos hasta que las lentejas se hagan. Emplatamos y terminamos con un poco de perejil por encima. Servimos."
    },
    {
        name: "Quiche de Puerros Y Panceta",
        ingredients: ["200 g de panceta", "2 Puerros", "4 Huevos", "4 cucharadas de nata líquida", "100 g de queso de gruyère rallado", "2 cucharadas de perejil", "200 g de harina", "100 g de mantequilla", "Aceite de oliva", "Sal", "Pimienta", "Agua"],
        preparation: "En primer lugar, tamizamos la harina y la mezclamos con una pizca de sal y la mantequilla. Añadimos 2 cucharadas de agua y amasamos. Seguidamente, espolvoreamos harina sobre la superficie de trabajo y amasamos hasta que quede una masa perfecta. Envolvemos la masa en film y la dejamos reposar en la nevera durante 30 minutos. Precalentamos el horno a 200ºC. Cuando la masa haya reposado, la estiramos con un rodillo y la disponemos en una sartén apta para horno pintada con un poco de aceite de oliva. Colocamos la masa de tal manera que se adapte a la forma de la sartén. Después, ponemos papel de plata sobre la masa y colocamos arroz crudo encima para hacer peso y conseguir de esta manera que la base de nuestra masa quede perfectamente plana. Horneamos durante 10 minutos. Mientras, preparamos el relleno. Para ello, picamos la panceta y la sofreímos en una sartén con un poco de aceite de oliva. Una vez que la carne esté dorada, añadimos los puerros picados y seguimos cocinando hasta que este todo bien pochado. Por otro lado, batimos los huevos, los mezclamos con nata, el queso rallado y salpimentamos. Incorporamos el sofrito y perejil picado. Pasados los 10 minutos, retiramos el peso y el papel de plata de encima de la masa. Horneamos unos minutos más hasta que quede dorada. A continuación, sacamos la masa del horno y la rellenamos con la mezcla. Rallamos queso por encima. Horneamos durante 15-20 minutos. Pasado este tiempo, nuestra quiche ya estará lista para comer."
    },
    {
        name: "Tacos de Carne con Mayonesa Wasabi",
        ingredients: ["2 filetes de solomillo de carne de vacuno", "6-8 tortillas de maíz pequeñas", "2 cucharadas de pasta de miso", "1 cucharada de azúcar", "Pimienta recién molida negro", "½ cabeza de col china", "Vinagre de arroz", "½ cucharadita de aceite de sésamo tostado", "1 cucharadita de copos de chile seco", "½ cucharadita de wasabi", "2 cucharadas de mahonesa", "Aceite de oliva", "Sal"],
        preparation: "En primer lugar, salpimentamos la carne y la marcamos en una sartén muy caliente con un chorrito de aceite de oliva. Mientras, preparamos un marinado. Para ello, en un bol, mezclamos la pasta de miso, el azúcar, el vinagre de arroz y un chorrito de aceite de oliva, sal y pimienta. Cuando la carne esté marcada la disponemos en el marinado. Durante unos minutos. Seguidamente, picamos la col y la mezclamos con copos de chile, un chorrito de vinagre de arroz, y unas gotas de aceite de sésamo. Añadimos también el wasabi y y la mahonesa. Doramos las tortitas en una sartén y las vamos poniendo en un rodillo para que cojan la forma similar a la de un taco. A continuación, cortamos los filetes en tiras. Finalmente montamos los tacos. Para ello, untamos las tortitas con la mahonesa de wasabi, ponemos un puñado de col y terminamos disponiendo la carne encima. Servimos."
    }
];

function searchRecipes() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const results = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchInput);
        const ingredientsMatch = recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchInput));
        const preparationMatch = recipe.preparation.toLowerCase().includes(searchInput);
        return nameMatch || ingredientsMatch || preparationMatch;
    });

    displayResults(results);
}

function displayResults(results) {
    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';

    if (results.length === 0) {
        recipeResults.innerHTML = '<p>No se encontraron recetas.</p>';
        return;
    }

    results.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        recipeElement.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredientes:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Preparación:</strong> ${recipe.preparation}</p>
        `;

        recipeResults.appendChild(recipeElement);
    });
}