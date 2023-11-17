let cart = [];

        function addToCart(productName, price) {
            cart.push({ name: productName, price: price });
            alert(productName + ' adicionado ao carrinho!');
        }

        function viewCart() {
            let cartItems = "Carrinho de Compras:\n";
            let total = 0;

            for (let item of cart) {
                cartItems += item.name + ' - R$ ' + item.price.toFixed(2) + '\n';
                total += item.price;
            }

            cartItems += '\nTotal: R$ ' + total.toFixed(2);

            alert(cartItems);
        }