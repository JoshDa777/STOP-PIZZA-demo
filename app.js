(() => {
  'use strict';

  const money = value => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value);
  const pizzaSizes = [
    { id: 'porcion', label: 'Porción', portions: '1 porción', prices: { Clasicas: 10000, Melos: 12000, Especiales: 15000 } },
    { id: 'media', label: 'Maxi Personal', detail: '4 porciones', portions: '4 porciones', prices: { Clasicas: 17000, Melos: 18000, Especiales: 20000 } },
    { id: 'junior', label: 'Junior', detail: '6 porciones', portions: '6 porciones', prices: { Clasicas: 22000, Melos: 24000, Especiales: 27000 } },
    { id: 'mediana', label: 'Mediana', detail: '8 porciones', portions: '8 porciones', prices: { Clasicas: 36000, Melos: 39000, Especiales: 50000 } },
    { id: 'familiar', label: 'Familiar', detail: '12 porciones', portions: '12 porciones', prices: { Clasicas: 58000, Melos: 65000, Especiales: 75000 } }
  ];

  const pizza = (id, name, category, description, image, featured = false) => ({ id, name, category, description, image, featured, kind: 'pizza' });
  const fixed = (id, name, category, description, price, image, featured = false) => ({ id, name, category, description, price, image, featured, kind: 'fixed' });
  const pending = (id, name, category, description, image) => ({ id, name, category, description, price: null, image, kind: 'pending' });

  // Transcripción del menú físico de Stop Pizza. Los sabores y precios no se han recalculado.
  const products = [
    // Sabores clásicos
    pizza('hawaiiana', 'Hawaiana', 'Clasicas', 'Jamón, piña calada, salsa napolitana y queso.', 'pepperoni', true),
    pizza('pollo-champinones', 'Pollo champiñones', 'Clasicas', 'Pollo, champiñones, salsa napolitana y queso.', 'classic'),
    pizza('jamon-queso', 'Jamón queso', 'Clasicas', 'Jamón, salsa napolitana y queso.', 'pepperoni'),
    pizza('kabanos', 'Kábanos', 'Clasicas', 'Jamón, kabanos, salsa napolitana y queso.', 'classic'),
    pizza('napolitana', 'Napolitana', 'Clasicas', 'Tomate, orégano, salsa napolitana y queso.', 'classic'),
    pizza('solo-queso', 'Solo queso', 'Clasicas', 'Salsa napolitana y doble queso.', 'pepperoni'),
    pizza('solo-pollo', 'Solo pollo', 'Clasicas', 'Pollo, salsa napolitana y queso.', 'classic'),
    pizza('bocadillo', 'Bocadillo', 'Clasicas', 'Bocadillo veleño, salsa napolitana y queso.', 'classic'),

    // Sabores Melos
    pizza('pepperoni', 'Pepperoni', 'Melos', 'Jamón, pepperoni, salsa napolitana y queso.', 'pepperoni', true),
    pizza('salami', 'Salami', 'Melos', 'Jamón, salami, salsa napolitana y queso.', 'pepperoni'),
    pizza('pollo-jamon', 'Pollo jamón', 'Melos', 'Jamón, pollo, salsa napolitana y queso.', 'classic'),
    pizza('pollo-kabano', 'Pollo kabano', 'Melos', 'Pollo, kabano, salsa napolitana y queso.', 'classic'),
    pizza('margarita', 'Margarita', 'Melos', 'Tomate, tocineta, salsa napolitana y queso.', 'pepperoni'),
    pizza('bocadeli', 'Bocadeli', 'Melos', 'Bocadillo de beleño, tocineta, salsa napolitana y queso.', 'classic'),
    pizza('champi-carne', 'Champi-carne', 'Melos', 'Champiñones, jamón o tocineta, salsa napolitana y queso.', 'classic'),
    pizza('maicitos', 'Maicitos', 'Melos', 'Maíz tierno, tocineta o kabano, salsa napolitana y queso.', 'classic'),
    pizza('maduritos', 'Maduritos', 'Melos', 'Maduro, kabano o tocineta, salsa napolitana y queso.', 'mixed'),
    pizza('maiz-pollo', 'Maíz pollo', 'Melos', 'Maíz tierno, pollo, salsa napolitana y queso.', 'mixed'),
    pizza('pollo-tocineta', 'Pollo tocineta', 'Melos', 'Pollo, tocineta, salsa napolitana y queso.', 'pepperoni'),
    pizza('vegetariana', 'Vegetariana', 'Melos', 'Tomate, cebolla, champiñones, pimentón, salsa napolitana y queso.', 'vegetarian'),

    // Especiales
    pizza('super-especial', 'Súper especial', 'Especiales', 'Tomate, cebolla, champiñones, granadilla, pollo, kabano, tocineta, salsa napolitana y queso.', 'mixed', true),
    pizza('mamalo', 'Mamalo', 'Especiales', 'Maduro, maíz tierno, kabano, tocineta, salsa napolitana y queso.', 'mixed'),
    pizza('cuatro-carnes', '4 carnes', 'Especiales', 'Pollo, jamón, kabano, salami, salsa napolitana y queso.', 'pepperoni'),
    pizza('especial-carnes', 'Especial de carnes', 'Especiales', 'Jamón, salami, kabano, tocineta, salsa napolitana y queso.', 'pepperoni'),
    pizza('mexicana', 'Mexicana', 'Especiales', 'Tomate, cebolla, pepperoni, Doritos, jalapeño, salsa napolitana y queso.', 'mixed'),
    pizza('endiablada', 'Endiablada', 'Especiales', 'Pepperoni, kabano, cebolla, jalapeño, salsa napolitana y queso.', 'pepperoni'),
    pizza('petete', 'Petete', 'Especiales', 'Pollo, tomate, tocineta, salsa napolitana y queso.', 'mixed'),
    pizza('samba-especial', 'Samba especial', 'Especiales', 'Maduro, pollo, tocineta, salsa napolitana y queso.', 'mixed'),
    pizza('bolanesa', 'Bolañesa', 'Especiales', 'Cebolla, tomate, salsa y queso.', 'classic'),
    pizza('ropa-vieja', 'Ropa vieja', 'Especiales', 'Jalapeño, cebolla, tomate, salsa y queso.', 'classic'),

    // Lasañas y gratinados
    fixed('lasagna-mixta', 'Lasagna mixta', 'Gratinados', 'Pollo, carne en salsa boloñesa y queso. Acompañada de panecillos.', 20000, 'lasagna', true),
    fixed('maduritos-gratinados', 'Maduritos gratinados', 'Gratinados', 'Plátano maduro, pollo y tocineta bañados en salsa bechamel y queso. Acompañados de patacones.', 15000, 'gratin'),
    fixed('maicitos-gratinados', 'Maicitos gratinados', 'Gratinados', 'Maíz tierno, pollo y tocineta bañados en salsa bechamel y queso. Acompañados de panecillos.', 15000, 'gratin'),

    // Bebidas preparadas y embotelladas
    fixed('granizado-agua', 'Granizado en agua', 'Bebidas', 'Bebida fría granizada preparada en agua.', 9000, 'lemonade'),
    fixed('granizado-leche', 'Granizado en leche', 'Bebidas', 'Bebida fría granizada preparada en leche.', 10000, 'juice'),
    fixed('limonada-natural', 'Limonada natural', 'Bebidas', 'Limonada natural con hielo.', 10000, 'lemonade'),
    fixed('limonada-cerezada', 'Limonada cerezada', 'Bebidas', 'Limonada cerezada.', 12000, 'juice'),
    fixed('limonada-coco', 'Limonada de coco', 'Bebidas', 'Limonada de coco.', 12000, 'lemonade'),
    fixed('agua-botella', 'Agua en botella', 'Bebidas', 'Agua embotellada.', 3000, 'juice'),
    fixed('gaseosa-personal', 'Gaseosa personal', 'Bebidas', 'Gaseosa en presentación personal.', 4500, 'juice'),
    fixed('gaseosa-15', 'Gaseosa 1.5 L', 'Bebidas', 'Gaseosa en presentación de 1.5 litros.', 8500, 'juice'),
    fixed('hit-personal', 'Jugo Hit personal', 'Bebidas', 'Jugo Hit en presentación personal.', 4500, 'juice'),
    fixed('hit-litro', 'Jugo Hit 1 litro', 'Bebidas', 'Jugo Hit en presentación de un litro.', 7000, 'juice'),

    // Jugos naturales: el reverso del menú no indica precio.
    pending('jugo-fresa', 'Jugo natural de fresa', 'Bebidas', 'Sabor de jugo natural. Precio por confirmar.', 'juice'),
    pending('jugo-lulo', 'Jugo natural de lulo', 'Bebidas', 'Sabor de jugo natural. Precio por confirmar.', 'juice'),
    pending('jugo-mora', 'Jugo natural de mora', 'Bebidas', 'Sabor de jugo natural. Precio por confirmar.', 'juice'),
    pending('jugo-maracuya', 'Jugo natural de maracuyá', 'Bebidas', 'Sabor de jugo natural. Precio por confirmar.', 'juice'),
    pending('jugo-mango', 'Jugo natural de mango', 'Bebidas', 'Sabor de jugo natural. Precio por confirmar.', 'juice')
  ];

  const images = {
    hero: 'https://images.unsplash.com/photo-1650142700236-f1889e0193b8?auto=format&fit=crop&w=1300&q=85',
    pepperoni: 'https://images.unsplash.com/photo-1578301807752-33631801f8aa?auto=format&fit=crop&w=1000&q=82',
    classic: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=1000&q=82',
    vegetarian: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=82',
    mixed: 'https://images.unsplash.com/photo-1650142700236-f1889e0193b8?auto=format&fit=crop&w=1000&q=82',
    lasagna: 'https://images.unsplash.com/photo-1760390952710-b0e010ec4e50?auto=format&fit=crop&w=1000&q=82',
    gratin: 'https://images.unsplash.com/photo-1760390952710-b0e010ec4e50?auto=format&fit=crop&w=1000&q=82',
    lemonade: 'https://images.unsplash.com/photo-1507281549113-040fcfef650e?auto=format&fit=crop&w=1000&q=82',
    juice: 'https://images.unsplash.com/photo-1473348164936-13be821e561c?auto=format&fit=crop&w=1000&q=82'
  };

  const state = { filter: 'all', query: '', cart: [], selected: null, modalQty: 1, selectedSize: 'porcion' };
  const $ = id => document.getElementById(id);
  const productGrid = $('productGrid');
  const productModal = $('productModal');
  const checkoutModal = $('checkoutModal');
  const cartDrawer = $('cartDrawer');
  const overlay = $('overlay');
  const categoryNames = { Clasicas: 'Sabores clásicos', Melos: 'Sabores Melos', Especiales: 'Especiales', Gratinados: 'Lasañas y gratinados', Bebidas: 'Bebidas' };

  function imageFor(product) {
    const overrides = window.STOP_PIZZA_CONFIG && window.STOP_PIZZA_CONFIG.productImages;
    const customImage = overrides && overrides[product.id];
    if (typeof customImage === 'string' && customImage.trim()) return customImage.trim();
    return images[product.image] || images.classic;
  }

  // Optional hero replacement, configurable without editing CSS.
  const customHero = window.STOP_PIZZA_CONFIG && window.STOP_PIZZA_CONFIG.heroImage;
  if (typeof customHero === 'string' && customHero.trim()) {
    const hero = document.querySelector('.hero-image');
    if (hero) hero.style.backgroundImage = `url("${customHero.trim()}")`;
  }
  function priceRange(product) {
    const vals = pizzaSizes.map(s => s.prices[product.category]);
    return `${money(Math.min(...vals))} – ${money(Math.max(...vals))}`;
  }
  function cardPrice(product) {
    if (product.kind === 'pizza') return priceRange(product);
    if (product.price === null) return 'Por confirmar';
    return money(product.price);
  }
  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  function renderProducts() {
    const query = state.query.trim().toLocaleLowerCase('es-CO');
    const visible = products.filter(product => {
      const filterMatch = state.filter === 'all' || product.category === state.filter;
      const queryMatch = !query || `${product.name} ${product.description} ${categoryNames[product.category]}`.toLocaleLowerCase('es-CO').includes(query);
      return filterMatch && queryMatch;
    });
    $('resultsLabel').textContent = state.filter === 'all' ? 'TODOS LOS ANTOJOS' : (categoryNames[state.filter] || state.filter).toLocaleUpperCase('es-CO');
    $('resultsCount').textContent = `${visible.length} ${visible.length === 1 ? 'producto' : 'productos'}`;
    $('emptyState').hidden = visible.length > 0;
    productGrid.innerHTML = visible.map((product, index) => {
      const label = product.category === 'Bebidas' ? 'Bebida' : categoryNames[product.category];
      const image = imageFor(product);
      const tag = product.kind === 'pizza' ? 'PIZZA' : product.kind === 'pending' ? 'JUGO NATURAL' : product.category === 'Bebidas' ? 'BEBIDA' : 'PREPARACIÓN';
      const action = product.kind === 'pizza' ? 'Elegir tamaño' : product.kind === 'pending' ? 'Añadir · precio pendiente' : 'Agregar';
      return `<article class="product-card ${product.featured ? 'featured' : ''}" style="--card-index:${index}">
        <div class="product-image" style="background-image:url('${image}')"><span class="product-tag">${tag}</span></div>
        <div class="product-copy">
          <div class="product-topline"><h3>${escapeHtml(product.name)}</h3><span class="product-price">${cardPrice(product)}${product.kind === 'pizza' ? '<small>según tamaño</small>' : ''}</span></div>
          <p>${escapeHtml(product.description)}</p>
          <div class="product-bottom"><span class="category-label">${escapeHtml(label)}</span><button class="add-small" type="button" data-product="${product.id}">${action} <span aria-hidden="true">+</span></button></div>
        </div>
      </article>`;
    }).join('');
  }

  function openProduct(id) {
    const product = products.find(item => item.id === id);
    if (!product) return;
    state.selected = product;
    state.modalQty = 1;
    state.selectedSize = pizzaSizes[0].id;
    $('modalTitle').textContent = product.name;
    $('modalDescription').textContent = product.description;
    $('modalCategory').innerHTML = `<i></i> ${categoryNames[product.category] || product.category}`;
    $('modalPhoto').style.backgroundImage = `url('${imageFor(product)}')`;
    $('modalQty').textContent = '1';
    $('pizzaOptions').hidden = product.kind !== 'pizza';
    $('fixedPrice').hidden = product.kind === 'pizza';
    if (product.kind === 'pizza') {
      $('pizzaSize').innerHTML = pizzaSizes.map(size => `<option value="${size.id}">${size.label}${size.detail ? ` · ${size.detail}` : ''} — ${money(size.prices[product.category])}</option>`).join('');
      $('pizzaCategoryChoice').innerHTML = `<span class="category-pill">${categoryNames[product.category]}</span>`;
    } else if (product.price === null) {
      $('fixedPrice').innerHTML = `Precio por confirmar<small>Se añadirá al mensaje y el restaurante confirmará el valor.</small>`;
    } else {
      $('fixedPrice').textContent = money(product.price);
    }
    productModal.classList.add('open');
    productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('modalAdd').focus();
  }

  function closeProduct() {
    productModal.classList.remove('open');
    productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function addToCart() {
    const product = state.selected;
    if (!product) return;
    let size = null;
    let price = product.price;
    if (product.kind === 'pizza') {
      size = pizzaSizes.find(item => item.id === $('pizzaSize').value) || pizzaSizes[0];
      price = size.prices[product.category];
    }
    const key = size ? `${product.id}::${size.id}` : product.id;
    const existing = state.cart.find(item => item.key === key);
    if (existing) existing.qty += state.modalQty;
    else state.cart.push({ key, productId: product.id, name: product.name, category: product.category, description: product.description, qty: state.modalQty, price, sizeLabel: size ? `${size.label}${size.detail ? ` (${size.detail})` : ''}` : null, image: product.image });
    closeProduct();
    renderCart();
    showToast(`${product.name} añadido al carrito`);
  }

  function subtotal() {
    return state.cart.reduce((sum, item) => sum + (item.price === null ? 0 : item.price * item.qty), 0);
  }
  function cartQty() { return state.cart.reduce((sum, item) => sum + item.qty, 0); }
  function renderCart() {
    const count = cartQty();
    $('cartCountTop').textContent = count;
    $('cartCountFloat').textContent = count;
    $('cartTotalFloat').textContent = money(subtotal());
    const empty = state.cart.length === 0;
    $('cartEmpty').hidden = !empty;
    $('cartSummary').hidden = empty;
    if (empty) { $('cartItems').innerHTML = ''; return; }
    $('cartItems').innerHTML = state.cart.map(item => `
      <div class="cart-row">
        <div><h4>${escapeHtml(item.name)}</h4><small>${escapeHtml(categoryNames[item.category] || item.category)}${item.sizeLabel ? ` · ${escapeHtml(item.sizeLabel)}` : ''}</small>
          <div class="cart-row-controls"><button type="button" data-cart-action="minus" data-key="${item.key}" aria-label="Restar unidad">−</button><span>${item.qty}</span><button type="button" data-cart-action="plus" data-key="${item.key}" aria-label="Sumar unidad">+</button><button class="remove-item" type="button" data-cart-action="remove" data-key="${item.key}">Quitar</button></div>
        </div>
        <div class="cart-row-price">${item.price === null ? 'Por confirmar' : money(item.price * item.qty)}<small>${item.price === null ? 'sin precio publicado' : `${money(item.price)} c/u`}</small></div>
      </div>`).join('');
    $('cartSubtotal').textContent = money(subtotal());
    $('cartTotal').textContent = money(subtotal());
    $('pendingNote').hidden = !state.cart.some(item => item.price === null);
  }

  function openCart() {
    closeProduct();
    overlay.classList.add('open');
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
    $('closeCart').focus();
  }
  function closeCart() {
    overlay.classList.remove('open');
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
  }

  function changeCart(key, action) {
    const item = state.cart.find(row => row.key === key);
    if (!item) return;
    if (action === 'plus') item.qty += 1;
    if (action === 'minus') item.qty -= 1;
    if (action === 'remove' || item.qty <= 0) state.cart = state.cart.filter(row => row.key !== key);
    renderCart();
  }

  function openCheckout() {
    if (!state.cart.length) return;
    closeCart();
    $('checkoutSubtotal').textContent = money(subtotal());
    const configured = getWhatsappNumber();
    $('configWarning').hidden = configured.valid;
    checkoutModal.classList.add('open');
    checkoutModal.setAttribute('aria-hidden', 'false');
    $('checkoutForm').querySelector('[name="name"]').focus();
  }
  function closeCheckout() {
    checkoutModal.classList.remove('open');
    checkoutModal.setAttribute('aria-hidden', 'true');
  }

  function getWhatsappNumber() {
    const raw = window.STOP_PIZZA_CONFIG && window.STOP_PIZZA_CONFIG.whatsappNumber;
    const digits = String(raw || '').replace(/\D/g, '');
    return { digits, valid: /^\d{10,15}$/.test(digits) && !/[xX]/.test(String(raw || '')) };
  }

  function buildMessage(formData) {
    const lines = state.cart.map(item => {
      const details = [item.sizeLabel, categoryNames[item.category]].filter(Boolean).join(' · ');
      const amount = item.price === null ? 'Precio por confirmar' : `${money(item.price)} c/u · ${money(item.price * item.qty)}`;
      return `• ${item.qty} × ${item.name}${details ? ` (${details})` : ''}\n  ${amount}`;
    });
    const delivery = formData.get('delivery');
    const addressLines = delivery === 'Domicilio'
      ? `Dirección: ${formData.get('address')}\nBarrio: ${formData.get('neighborhood') || 'Por indicar'}`
      : 'Entrega: Recoger en el local de Stop Pizza';
    const pending = state.cart.some(item => item.price === null);
    const linesOut = [
      '¡Hola, Stop Pizza! Quiero realizar este pedido:',
      '',
      '*MI PEDIDO*',
      ...lines,
      '',
      `Subtotal de productos con precio: ${money(subtotal())}`,
      `Domicilio: ${delivery === 'Domicilio' ? '$3.000' : 'No aplica · recoger en el local'}`,
      ...(pending ? ['Productos con precio pendiente: confirmar por WhatsApp'] : []),
      `Total parcial${pending ? ' (sin productos pendientes)' : ''}: ${money(subtotal())}${delivery === 'Domicilio' ? ' + $3.000' : ''}`,
      '',
      '*DATOS DE ENTREGA*',
      `Recibe: ${formData.get('name')}`,
      `Celular: ${formData.get('phone')}`,
      addressLines,
      `Medio de pago: ${formData.get('payment')}`,
      `Indicaciones: ${formData.get('notes') || 'Sin indicaciones adicionales'}`,
      '',
      'Por favor, confirmen disponibilidad y tiempo estimado. ¡Gracias!'
    ];
    return linesOut.join('\n');
  }

  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
      else {
        const temp = document.createElement('textarea');
        temp.value = text; temp.style.position = 'fixed'; temp.style.opacity = '0';
        document.body.appendChild(temp); temp.select();
        const ok = document.execCommand('copy'); temp.remove();
        if (!ok) throw new Error('No se pudo copiar');
      }
      showToast('Mensaje del pedido copiado');
    } catch (error) {
      showToast('No se pudo copiar automáticamente. Selecciona el texto del mensaje.');
    }
  }

  function showToast(message) {
    const toast = $('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function setDeliveryFields() {
    const delivery = document.querySelector('input[name="delivery"]:checked')?.value;
    const on = delivery === 'Domicilio';
    document.querySelectorAll('.address-field').forEach(field => {
      field.hidden = !on;
      const input = field.querySelector('input');
      if (input) input.required = on && input.name === 'address';
    });
    $('deliveryAddress').required = on;
  }

  // Eventos
  productGrid.addEventListener('click', event => {
    const button = event.target.closest('[data-product]');
    if (button) openProduct(button.dataset.product);
  });
  document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('.filter-chip').forEach(chip => chip.classList.toggle('active', chip === button));
    state.filter = button.dataset.filter;
    renderProducts();
  }));
  $('menuSearch').addEventListener('input', event => { state.query = event.target.value; renderProducts(); });
  $('pizzaSize').addEventListener('change', () => {});
  $('modalQtyMinus').addEventListener('click', () => { state.modalQty = Math.max(1, state.modalQty - 1); $('modalQty').textContent = state.modalQty; });
  $('modalQtyPlus').addEventListener('click', () => { state.modalQty = Math.min(30, state.modalQty + 1); $('modalQty').textContent = state.modalQty; });
  $('modalAdd').addEventListener('click', addToCart);
  productModal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeProduct));
  $('openCartTop').addEventListener('click', openCart);
  $('floatingCart').addEventListener('click', openCart);
  $('closeCart').addEventListener('click', closeCart);
  overlay.addEventListener('click', closeCart);
  $('goMenu').addEventListener('click', () => { closeCart(); $('menu').scrollIntoView({ behavior: 'smooth' }); });
  $('cartItems').addEventListener('click', event => {
    const button = event.target.closest('[data-cart-action]');
    if (button) changeCart(button.dataset.key, button.dataset.cartAction);
  });
  $('clearCart').addEventListener('click', () => { state.cart = []; renderCart(); showToast('Carrito vacío'); });
  $('checkoutBtn').addEventListener('click', openCheckout);
  checkoutModal.querySelectorAll('[data-close-checkout]').forEach(el => el.addEventListener('click', closeCheckout));
  document.querySelectorAll('input[name="delivery"]').forEach(input => input.addEventListener('change', setDeliveryFields));
  $('checkoutForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const formData = new FormData(form);
    const message = buildMessage(formData);
    const number = getWhatsappNumber();
    if (!number.valid) {
      $('configWarning').hidden = false;
      showToast('Configura primero el WhatsApp de destino en config.js');
      copyText(message);
      return;
    }
    const url = `https://wa.me/${number.digits}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
  $('copyOrder').addEventListener('click', () => {
    const form = $('checkoutForm');
    if (!form.reportValidity()) return;
    copyText(buildMessage(new FormData(form)));
  });
  $('mobileMenuBtn').addEventListener('click', () => {
    const nav = document.querySelector('.main-nav');
    const expanded = nav.classList.toggle('open');
    $('mobileMenuBtn').setAttribute('aria-expanded', String(expanded));
    $('mobileMenuBtn').textContent = expanded ? '×' : '☰';
  });
  document.querySelectorAll('.main-nav a').forEach(link => link.addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('open');
    $('mobileMenuBtn').setAttribute('aria-expanded', 'false');
    $('mobileMenuBtn').textContent = '☰';
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') { closeProduct(); closeCheckout(); closeCart(); }
  });

  $('year').textContent = new Date().getFullYear();
  setDeliveryFields();
  renderProducts();
  renderCart();
})();
