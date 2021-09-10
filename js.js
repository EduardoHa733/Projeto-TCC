// Botão para tema para escuro
function trocaTema(){
  var trocar = document.body;
  var botao = document.getElementById ("btn-tema");
  trocar.classList.toggle("dark-theme");
    if (botao.innerHTML == "Modo Escuro"){
      botao.innerHTML = "Modo Claro";
      document.getElementById("btn-tema").style.backgroundColor = "white"
      document.getElementById("btn-tema").style.color = "black"
    }else{
      botao.innerHTML = "Modo Escuro";
      document.getElementById("btn-tema").style.backgroundColor = "black"
      document.getElementById("btn-tema").style.color = "white"
    }
}

//Formatar CEP
$('#cep').mask('00000-000');

//Formatar número de telefone
function mask(o, f) {
  setTimeout(function() {
    var v = mphone(o.value);
    if (v != o.value) {
      o.value = v;
    }
  }, 1);
}
function mphone(v) {
  var r = v.replace(/\D/g, "");
  r = r.replace(/^0/, "");
  if (r.length > 10) {
    r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
  } else if (r.length > 5) {
    r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
  } else if (r.length > 2) {
    r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
  } else {
    r = r.replace(/^(\d*)/, "($1");
  }
  return r;
}
// Fim Formatar número de telefone

// Escolher somente uma forma de pagamento
function selectOnlyThis(id) {
  for (var i = 1;i <= 4; i++)
  {
      document.getElementById("pagamento" + i).checked = false;
  }
  document.getElementById(id).checked = true;
}


//Array de produtos
let lista = [
  {
"nome": "Laranja",
"id": 1,
"valor": 10.50,
"description":"Um saco de laranja.",
},
  {
"nome": "Manteiga",
"id": 2,
"valor": 7,
"description":"Pote de 500g de manteiga.",
},
  {
"nome": "Presunto",
"id": 3,
"valor": 6,
"description":"200g de Presunto.",
},
];

// Resultado da busca (sempre retorna todo o array de produtos quando vazio)
search(null);
 
function search(value) {
  let html='';
  nome=document.getElementById("termo").value;

  lista.forEach( (item) => {
    if (item.nome.toLowerCase().includes(nome.toLowerCase())) {
      
      html +='<div class="card" style="width: 18rem;">';
      html +='<div class="card-body">';
      html +='<img class ="imgProd" src="imagens/'+item.id+'.jpg">';
      html += `<p class="tituloprod"> ${item.nome} </p>`;
      html +='<p class="valorprod">Preço:'+item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })+'</p>';
      html +='<p class="card-text">'+item.description;
      html += '<a href="#" class="add-to-cart btn btn-primary" data-id="'+item.id+'">Adicionar ao Carrinho</a>';
      html +='</div>';
      html +='</div> <br>';
    } 
  });

  document.getElementById("resultado").innerHTML = html;

}


// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function() {
  // =============================
  // Private methods and properties
  // =============================
  cart = [];
  
  // Constructor
  function Item(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
  }


  
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  
    // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }
  
  
  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};
 
  // Add to cart
  obj.addItemToCart = function(name, price, count) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart[item].count ++;
        saveCart();
        return;
      }
    }

    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function(name, count) {
    for(var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function(name) {
      for(var item in cart) {
        if(cart[item].name === name) {
          cart[item].count --;
          if(cart[item].count === 0) {
            cart.splice(item, 1);
          }
          break;
        }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function(name) {
    for(var item in cart) {
      if(cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function() {
    cart = [];
    saveCart();
  }

  // Count cart 
  obj.totalCount = function() {
    var totalCount = 0;
    for(var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  obj.totalCart = function() {
    var totalCart = 0;
    for(var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }

  // List cart
  obj.listCart = function() {
    var cartCopy = [];
    for(i in cart) {
      item = cart[i];
      itemCopy = {};
      for(p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item

$('.add-to-cart').click(function(event) { 
  event.preventDefault();
  let InsereProdCart = lista.find((item)=>item.id == $(this).data('id'));
  shoppingCart.addItemToCart(InsereProdCart.nome, InsereProdCart.valor, 1);
  displayCart();
});

// Clear items
$('.clear-cart').click(function() {
  shoppingCart.clearCart();
  displayCart();
});


//Inicio da função para mostrar todo o carrinho e suas variáveis
function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  for(var i in cartArray) {
    output += "<tr>"
      + "<td>" + cartArray[i].name + "</td>" 
      + "<td>x" + cartArray[i].count + " (Un " +cartArray[i].price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + ")" +"</td>"
      + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
      + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
      + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = " 
      + "<td>" + cartArray[i].total + "</td>"
      +  "</tr>";
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.removeItemFromCart(name);
  displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function(event) {
  var name = $(this).data('name')
  shoppingCart.addItemToCart(name);
  displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function(event) {
   var name = $(this).data('name');
   var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();

