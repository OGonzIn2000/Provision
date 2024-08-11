$(document).ready(function () {
    const apiUrl = 'http://localhost/sisProvisionPagina/listar_productos.php';

    function cargarProductos() {
        console.log('Cargando productos...');  // Log para confirmar que la función se ejecuta
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log('Datos recibidos:', data); // Log para verificar los datos recibidos
                $('#productos-container').empty();

                data.forEach(function (producto) {
                    // Verifica que las propiedades sean correctas
                    console.log('Producto:', producto);

                    const productoCard = `
                        <div class="product-card">
                            <div class="product-image">
                                <img src="http://localhost/sisProvisionPagina/Assets/img/productos/${producto.imagen}" alt="${producto.titulo}">
                            </div>
                            <h3>${producto.titulo}</h3>
                            <p>${producto.resena}</p>
                        </div>
                    `;
                    $('#productos-container').append(productoCard);
                });
            },
            error: function (error) {
                console.error('Error al obtener los productos:', error);
            }
        });
    }

    cargarProductos();
});



$(document).ready(function() {
    const apiUrl = 'http://localhost/sisProvisionPagina/proyeccion_social.php';

    function cargarDatos() {
        $.ajax({
            url: apiUrl,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                const carouselContainer = $('#carousel-container .carousel');
                carouselContainer.empty();
                
                // Suponiendo que la descripción está en el primer elemento de la respuesta
                if (data.length > 0) {
                    const descripcion = data[0].descripcion; // Ajusta según la estructura de tu respuesta
                    $('#social-description').text(descripcion);
                }

                data.forEach(function(item) {
                    const slide = `
                        <div class="carousel-slide">
                            <img src="http://localhost/sisProvisionPagina/Assets/img/proyeccion_social/${item.imagen}" alt="${item.descripcion}">
                            <div class="carousel-description">${item.descripcion}</div>
                        </div>
                    `;
                    carouselContainer.append(slide);
                });
                inicializarCarrusel();
            },
            error: function(error) {
                console.error('Error al obtener los datos:', error);
            }
        });
    }

    let index = 0;
    let slides = [];
    let totalSlides = 0;

    function inicializarCarrusel() {
        slides = $('.carousel-slide');
        totalSlides = slides.length;

        function mostrarSlide(n) {
            slides.hide();
            if (n >= totalSlides) index = 0;
            if (n < 0) index = totalSlides - 1;
            slides.eq(index).show();
            // Actualiza la descripción
            $('#social-description').text(slides.eq(index).find('.carousel-description').text());
        }

        window.nextSlide = function() {
            mostrarSlide(index += 1);
        }

        window.prevSlide = function() {
            mostrarSlide(index -= 1);
        }

        $('.next').click(nextSlide);
        $('.prev').click(prevSlide);

        mostrarSlide(index); // Mostrar el primer slide
    }

    cargarDatos();
});
