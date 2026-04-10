
// ===== PRODUCT DATA =====
const products = [
  { id: 1, cat: 'books', subcat: 'school', name: 'NCERT Mathematics – Class 10', desc: 'Official NCERT textbook for CBSE Class 10 board exams. Latest edition.', price: 160, mrp: 160, tag: 'Bestseller', stock: 'high', img: '71mcGy2zP8L.jpg' },
  { id: 2, cat: 'books', subcat: 'school', name: 'NCERT Science – Class 10', desc: 'Complete Physics, Chemistry, and Biology syllabus by NCERT.', price: 190, mrp: 190, tag: 'New', stock: 3, img: 'NCERT_Science_Textbook_For_Class_10_Latest_Syllabus.jpg' },
  { id: 3, cat: 'books', subcat: 'guide', name: 'RD Sharma Mathematics – Class 10', desc: 'Detailed reference book for extra practice and concept building.', price: 495, mrp: 550, tag: 'Essential', stock: 'high', img: '71daF-ctE+L._SX445_.jpg' },
  { id: 4, cat: 'books', subcat: 'kids', name: 'Panchatantra Story Book', desc: 'Classic Indian moral stories with colorful illustrations for kids.', price: 120, mrp: 150, tag: 'Popular', stock: 12, img: 'shopping.webp' },
  { id: 5, cat: 'books', subcat: 'guide', name: 'Wren & Martin English Grammar', desc: 'High School English Grammar and Composition book for all boards.', price: 320, mrp: 400, tag: null, stock: 5, img: '71thN6KCCUL._AC_UF1000,1000_QL80_.jpg' },
  { id: 6, cat: 'books', subcat: 'guide', name: 'Oxford Student Atlas for India', desc: 'Highly detailed maps for geography students and competitive exams.', price: 280, mrp: 350, tag: 'Bestseller', stock: 'high', img: '51BsGXjzx8L._AC_UF1000,1000_QL80_.jpg' },
  { id: 7, cat: 'stationery', subcat: 'writing', name: 'Reynolds Trimax Blue Pen (Pack of 3)', desc: 'Smooth fluid ink system for fast and neat handwriting in exams.', price: 120, mrp: 135, tag: 'Value Pack', stock: 'high', img: '40293276_1-reynolds-trimax-blister-pen-blue-smooth-to-write.webp' },
  { id: 8, cat: 'stationery', subcat: 'notebooks', name: 'Classmate A4 Long Book (300 Pages)', desc: 'Premium quality white pages, single ruled for school and college use.', price: 120, mrp: 140, tag: 'Premium', stock: 25, img: '71jK7zcYXcL._SX522_.jpg' },
  { id: 9, cat: 'stationery', subcat: 'notebooks', name: 'Spiral Rough Register (400 Pages)', desc: 'Economical thick spiral register for rough work and daily practice.', price: 90, mrp: 120, tag: 'Popular', stock: 'high', img: 'sp002-copywala-original-imahghfagzrudrsq.webp' },
  { id: 10, cat: 'stationery', subcat: 'art', name: 'Camel Water Color Tubes (12 Shades)', desc: 'Rich, vibrant, and easily mixable watercolors for art students.', price: 110, mrp: 130, tag: null, stock: 15, img: '51Tu2QzBnLL._SX342_SY445_QL70_FMwebp_.webp' },
  { id: 11, cat: 'stationery', subcat: 'writing', name: 'Camlin Geometry Box', desc: 'Sturdy geometry box with self-centering compass and clear rulers.', price: 150, mrp: 180, tag: 'Bestseller', stock: 1, img: '41DfQYt5+KL._SY300_SX300_QL70_FMwebp_.webp' },
  { id: 12, cat: 'stationery', subcat: 'writing', name: 'Faber-Castell Textliner (Pack of 5)', desc: 'Super fluorescent highlighters in assorted colors. Smudge-free.', price: 100, mrp: 125, tag: null, stock: 6, img: 'faber-castell-set-of-5a.jpg' },
  { id: 13, cat: 'stationery', subcat: 'writing', name: 'Apsara Platinum Pencils (Pack of 10)', desc: 'Extra dark pencils with free non-dust eraser and sharpener inside.', price: 50, mrp: 50, tag: 'Essential', stock: 'high', img: '17206105430.jpg' },
  { id: 14, cat: 'stationery', subcat: 'art', name: 'Doms Sketch Pens (24 Shades)', desc: 'Bright, non-toxic sketch pens for drawing, coloring, and project making.', price: 100, mrp: 120, tag: null, stock: 8, img: 'aqua-water-colour-pen-24-shades-doms-original-imagr2hhemxhsx2u.webp' },
  { id: 15, cat: 'stationery', subcat: 'notebooks', name: 'Physics Practical File', desc: 'A4 size practical file, one side ruled and one side blank with premium paper.', price: 80, mrp: 100, tag: 'Essential', stock: 20, img: 'classmate-physics-practical-book-1.webp' },
  { id: 16, cat: 'stationery', subcat: 'writing', name: 'Wooden Exam Clip Board', desc: 'Sturdy wooden clip board for writing exams comfortably without bending.', price: 70, mrp: 90, tag: null, stock: 'high', img: '41TecD2LklL._SY300_SX300_QL70_FMwebp_.webp' }
];

const bundleData = {
    mandatoryBooks: [
        { id: 'b1', name: "NCERT Mathematics Class 10", price: 160, img: "71mcGy2zP8L.jpg" },
        { id: 'b2', name: "NCERT Science Class 10", price: 190, img: "NCERT_Science_Textbook_For_Class_10_Latest_Syllabus.jpg" },
        { id: 'b3', name: "Wren & Martin English Grammar", price: 320, img: "71thN6KCCUL._AC_UF1000,1000_QL80_.jpg" }
    ],
    optionalStationery: [
        { id: 'opt_s1', name: "Camlin Geometry Box", price: 150, img: "41DfQYt5+KL._SY300_SX300_QL70_FMwebp_.webp" },
        { id: 'opt_s2', name: "Classmate A4 Registers (Pack of 3)", price: 360, img: "71jK7zcYXcL._SX522_.jpg" },
        { id: 'opt_s3', name: "Reynolds Trimax Pens (Blue & Black)", price: 120, img: "40293276_1-reynolds-trimax-blister-pen-blue-smooth-to-write.webp" },
        { id: 'opt_s4', name: "Faber-Castell Highlighters", price: 100, img: "faber-castell-set-of-5a.jpg" }
    ]
};

// ===== VOICE SEARCH LOGIC =====
function startVoiceSearch() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-IN'; 
    
    recognition.onstart = () => showToast('<i class="fa-solid fa-microphone-lines"></i>', 'Listening... Please speak now.');
    
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      document.getElementById('heroSearch').value = text;
      document.getElementById('navSearch').value = text;
      doSearch(text);
      showToast('<i class="fa-solid fa-check"></i>', `Searched for: "${text}"`);
    };
    
    recognition.onerror = (event) => {
      showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Could not hear you properly. Try again.');
    };
    
    recognition.start();
  } else {
    showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Voice search is not supported in your browser.');
  }
}

// ===== CART / LOCALSTORAGE LOGIC =====
let cart = JSON.parse(localStorage.getItem('sbc_cart')) || [];

function saveCart() {
  localStorage.setItem('sbc_cart', JSON.stringify(cart));
}

function addToCart(id, event) {
  if(event) event.stopPropagation(); 
  const p = products.find(x => x.id === id);
  
  if(event) {
      const x = event.clientX;
      const y = event.clientY;
      const floatEl = document.createElement('div');
      floatEl.className = 'float-plus';
      floatEl.innerText = '+1';
      floatEl.style.left = `${x}px`;
      floatEl.style.top = `${y}px`;
      document.body.appendChild(floatEl);
      setTimeout(() => floatEl.remove(), 1000);
  }

  addItemToCartObj({ id: p.id, name: p.name, price: p.price, img: p.img });
}

function addToCartFromQuickView(id) {
    addToCart(id, null);
    closeQuickView();
    openCart();
}

function addItemToCartObj(itemObj) {
  const existing = cart.find(x => x.id === itemObj.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...itemObj, qty: 1 });
  }
  updateCartUI();
  
  const btn = document.getElementById('mainCartBtn');
  btn.classList.add('bump');
  setTimeout(() => btn.classList.remove('bump'), 400);
  
  showToast('<i class="fa-solid fa-cart-plus"></i>', `"${itemObj.name}" added to cart!`);
  saveCart();
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  updateCartUI();
  renderCartItems();
  saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); renderCartItems(); saveCart(); }
}

function updateCartUI() {
  const total = cart.reduce((a, b) => a + b.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('mobCartCount').textContent = total; 
}

function renderCartItems() {
  const container = document.getElementById('cartItemsContainer');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');
  const promoContainer = document.getElementById('cartPromoContainer');
  
  // Clear existing cart items from DOM without destroying the empty state
  const existingItems = container.querySelectorAll('.cart-item');
  existingItems.forEach(item => item.remove());
  
  if (cart.length === 0) {
    if(empty) empty.style.display = 'flex';
    if(footer) footer.style.display = 'none';
    if(promoContainer) promoContainer.style.display = 'none';
    return;
  }
  
  if(empty) empty.style.display = 'none';
  if(footer) footer.style.display = 'block';
  if(promoContainer) promoContainer.style.display = 'block';
  
  let html = '';
  cart.forEach(item => {
    const quoteId = typeof item.id === 'string' ? `'${item.id}'` : item.id;
    html += `
      <div class="cart-item">
        <div class="cart-item-img"><img src="${item.img}" alt="${item.name}" /></div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price}</div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty(${quoteId},-1)" aria-label="Decrease quantity"><i class="fa-solid fa-minus" style="font-size:0.7rem;"></i></button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" onclick="changeQty(${quoteId},1)" aria-label="Increase quantity"><i class="fa-solid fa-plus" style="font-size:0.7rem;"></i></button>
            <button class="remove-btn" onclick="removeFromCart(${quoteId})" title="Remove" aria-label="Remove item"><i class="fa-solid fa-trash-can"></i></button>
          </div>
        </div>
      </div>`;
  });
  container.insertAdjacentHTML('beforeend', html);
  
  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById('cartSubtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');

  const goal = 1500;
  const progressBar = document.getElementById('cartProgressBar');
  const promoText = document.getElementById('cartPromoText');
  let percent = Math.min(100, (subtotal / goal) * 100);
  if(progressBar) progressBar.style.width = percent + '%';
  
  if(subtotal >= goal) {
      if(promoText) promoText.innerHTML = `🎉 <strong>Target Reached!</strong> You've unlocked a Free Notebook!`;
      if(progressBar) progressBar.style.background = 'linear-gradient(90deg, #1e3a8a, #3b82f6)';
  } else {
      let diff = goal - subtotal;
      if(promoText) promoText.innerHTML = `Add ₹${diff} more to unlock a <strong>Free Notebook!</strong>`;
      if(progressBar) progressBar.style.background = 'linear-gradient(90deg, var(--accent), #fb923c)';
  }
}

function openCart() {
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function closeCartOnOverlay(e) {
  if (e.target === document.getElementById('cartOverlay')) closeCart();
}

// ===== QUICK VIEW MODAL LOGIC =====
function openQuickView(id) {
    const p = products.find(x => x.id === id);
    if(!p) return;
    
    document.getElementById('qvImg').src = p.img;
    document.getElementById('qvName').innerText = p.name;
    document.getElementById('qvCat').innerHTML = `<i class="fa-solid fa-tag"></i> ${p.cat === 'books' ? 'Books' : 'Stationery'}`;
    document.getElementById('qvPrice').innerText = `₹${p.price}`;
    document.getElementById('qvMrp').innerText = `₹${p.mrp}`;
    
    let discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);
    document.getElementById('qvDiscount').innerText = `${discount}% OFF`;
    
    document.getElementById('qvDesc').innerText = p.desc;
    document.getElementById('qvAddBtn').setAttribute('onclick', `addToCartFromQuickView(${p.id})`);
    
    document.getElementById('qvOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('qvOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeQuickViewOnOverlay(e) {
    if (e.target === document.getElementById('qvOverlay')) closeQuickView();
}


// ===== SCHOOL SETS BUILDER LOGIC =====
function triggerLoader() {
    const school = document.getElementById('schoolSelect').value;
    const cls = document.getElementById('classSelect').value;
    const resultDiv = document.getElementById('setsResult');
    const loader = document.getElementById('setsLoader');
    const progressDots = document.querySelectorAll('.b-dot');
    
    if(school && cls) {
        progressDots[1].classList.add('active');
        resultDiv.classList.add('hidden');
        loader.style.display = 'block';
        
        setTimeout(() => {
            loader.style.display = 'none';
            updateSetsLogic(school, cls);
        }, 500); 
    } else {
        resultDiv.classList.add('hidden');
        loader.style.display = 'none';
        progressDots[1].classList.remove('active');
    }
}

function updateSetsLogic(school, cls) {
  const resultDiv = document.getElementById('setsResult');
  resultDiv.classList.remove('hidden');
  document.getElementById('setDynamicName').innerText = `${school} - ${cls} Set`;
  
  const mList = document.getElementById('mandatoryBooksList');
  let mHtml = '';
  let basePrice = 0;
  bundleData.mandatoryBooks.forEach(book => {
      basePrice += book.price;
      mHtml += `
          <div class="bundle-item">
              <span class="mandatory-badge">Included</span>
              <img src="${book.img}" alt="${book.name}" loading="lazy">
              <div class="bundle-item-info">
                  <div class="bundle-item-name">${book.name}</div>
                  <div class="bundle-item-price">₹${book.price}</div>
              </div>
          </div>`;
  });
  mList.innerHTML = mHtml;
  document.getElementById('setBasePrice').value = basePrice;
  
  const oList = document.getElementById('optionalStationeryList');
  let oHtml = '';
  bundleData.optionalStationery.forEach(item => {
      oHtml += `
          <label class="bundle-item optional" id="label_${item.id}">
              <div class="optional-overlay">
                  <input type="checkbox" class="opt-checkbox" value="${item.price}" data-id="${item.id}" data-name="${item.name}" onchange="updateSetPrice(this)">
              </div>
              <img src="${item.img}" alt="${item.name}" loading="lazy">
              <div class="bundle-item-info">
                  <div class="bundle-item-name">${item.name}</div>
                  <div class="bundle-item-price">+₹${item.price}</div>
              </div>
          </label>`;
  });
  oList.innerHTML = oHtml;

  updateSetPrice();
}

function updateSetPrice(checkboxEl) {
   if(checkboxEl) {
       const label = document.getElementById('label_' + checkboxEl.dataset.id);
       if(checkboxEl.checked) label.classList.add('selected');
       else label.classList.remove('selected');
   }

   let base = parseInt(document.getElementById('setBasePrice').value) || 0;
   let addonTotal = 0;
   
   document.querySelectorAll('.opt-checkbox:checked').forEach(cb => {
       addonTotal += parseInt(cb.value);
   });
   
   document.getElementById('setDynamicPrice').innerText = '₹' + (base + addonTotal);
}

function addCustomSetToCart(event) {
   const school = document.getElementById('schoolSelect').value;
   const cls = document.getElementById('classSelect').value;
   
   let base = parseInt(document.getElementById('setBasePrice').value);
   let baseId = 'set_' + school.replace(/\s/g,'') + '_' + cls.replace(/\s/g,'') + '_base';

   // Floating animation logic
    if(event) {
        const x = event.clientX;
        const y = event.clientY;
        const floatEl = document.createElement('div');
        floatEl.className = 'float-plus';
        floatEl.innerText = '+1';
        floatEl.style.left = `${x}px`;
        floatEl.style.top = `${y}px`;
        document.body.appendChild(floatEl);
        setTimeout(() => floatEl.remove(), 1000);
    }

   // 1. Add Main Bundle
   addItemToCartObj({
       id: baseId,
       name: `${school} - ${cls} Mandatory Bundle`,
       price: base,
       img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=400&q=80'
   });

   // 2. Add each Add-on separately
   document.querySelectorAll('.opt-checkbox:checked').forEach(cb => {
       let addonPrice = parseInt(cb.value);
       let addonName = cb.dataset.name + ' (Add-on)';
       
       addItemToCartObj({
           id: cb.dataset.id + '_' + Date.now(), // unique id
           name: addonName,
           price: addonPrice,
           img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80' // generic stationery
       });
   });
   
   // Reset checkboxes
   document.querySelectorAll('.opt-checkbox').forEach(cb => {
       cb.checked = false;
       document.getElementById('label_' + cb.dataset.id).classList.remove('selected');
   });
   updateSetPrice();
}

// ===== WHATSAPP CHECKOUT LOGIC =====

function buildMiniSummary() {
  const total = cart.reduce((a, b) => a + b.price * b.qty, 0);
  document.getElementById('miniSummary').innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center;">
        <span style="font-weight:800; color:var(--navy); font-size:1.1rem;">Amount to Pay:</span>
        <span style="font-weight:900; color:#25D366; font-size:1.8rem;">₹${total.toLocaleString('en-IN')}</span>
    </div>
  `;
}

function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  buildMiniSummary();
  
  document.getElementById('checkoutStep1').classList.remove('hidden');
  document.getElementById('checkoutConfirm').classList.add('hidden');
  
  document.getElementById('checkoutOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
  openCart();
}

function validateField(id, check) {
  const fg = document.getElementById('fg-' + id);
  const el = document.getElementById('f' + id);
  const val = el.value.trim();
  if (!check(val)) { fg.classList.add('has-error'); return false; }
  fg.classList.remove('has-error'); return true;
}

function submitWhatsAppOrder() {
  const nameOk = validateField('name', v => v.length >= 2);
  const phoneOk = validateField('phone', v => /^\+?[\d\s\-]{10,}$/.test(v));
  if (!nameOk || !phoneOk) return;

  const name = document.getElementById('fname').value.trim();
  const phone = document.getElementById('fphone').value.trim();

  if (cart.length === 0) {
      showToast('<i class="fa-solid fa-triangle-exclamation"></i>', 'Your cart is empty!');
      return;
  }

  // Formatting Highly Accurate WhatsApp Message (Clean & Professional)
  let orderMsg = `*Hello Student Book Center!* 👋\nI would like to place a new order.\n\n*🛍️ ORDER SUMMARY*\n----------------------------------------\n`;

  cart.forEach((item, index) => {
      orderMsg += `*${index + 1}. ${item.name}*\n   Qty: ${item.qty} | Price: ₹${item.price * item.qty}\n\n`;
  });

  const subtotal = cart.reduce((a, b) => a + b.price * b.qty, 0);
  orderMsg += `----------------------------------------\n*💰 TOTAL AMOUNT:* ₹${subtotal.toLocaleString('en-IN')}\n\n`;
  orderMsg += `*👤 CUSTOMER DETAILS*\n• Name: ${name}\n• Phone: ${phone}\n\nPlease confirm my order and pickup time! Thank you.`;

  // Encode for URL
  const encodedMsg = encodeURIComponent(orderMsg);
  const storeNumber = "919412162542";
  const waUrl = `https://api.whatsapp.com/send?phone=${storeNumber}&text=${encodedMsg}`;

  // Open WhatsApp in new tab
  window.open(waUrl, '_blank');

  // Change modal view to Confirm
  document.getElementById('checkoutStep1').classList.add('hidden');
  document.getElementById('checkoutConfirm').classList.remove('hidden');

  if (typeof confetti === 'function') {
      confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#25D366', '#128C7E', '#ffffff'],
          zIndex: 9999
      });
  }

  // Clear Cart
  cart = [];
  saveCart();
  updateCartUI();
}

function finishOrder() {
  document.getElementById('checkoutOverlay').classList.remove('open');
  document.body.style.overflow = '';
  showPage('home');
}

// ===== PAGES & ROUTING =====
const pages = ['home','books','stationery','sets','search','contact'];

function showPage(name) {
  pages.forEach(p => {
    document.getElementById('page-' + p).classList.remove('active');
    
    const navEl = document.getElementById('nav-' + p);
    if (navEl) navEl.classList.remove('active');
    
    const mobNavEl = document.getElementById('mob-nav-' + p);
    if(mobNavEl) mobNavEl.classList.remove('active');
  });
  
  document.getElementById('page-' + name).classList.add('active');
  
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  
  const mobNavEl = document.getElementById('mob-nav-' + name);
  if (mobNavEl) mobNavEl.classList.add('active');
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  if (name === 'books') renderCategoryGrid('books', 'all');
  if (name === 'stationery') renderCategoryGrid('stationery', 'all');
}

// ===== PRODUCT RENDERING =====
function productCardHTML(p) {
  let stockHtml = '';
  if (typeof p.stock === 'number' && p.stock <= 3) {
      stockHtml = `<span class="urgency-tag"><i class="fa-solid fa-fire"></i> Only ${p.stock} left!</span>`;
  }
    
  return `
    <div class="product-card" onclick="openQuickView(${p.id})">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.tag ? `<div class="product-tag">${p.tag}</div>` : ''}
        <div class="quick-view-overlay">
            <button class="quick-view-btn">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-cat"><i class="fa-solid fa-tag"></i> ${p.cat === 'books' ? 'Book' : 'Stationery'}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">
            <small>₹${p.mrp}</small>₹${p.price}
            ${stockHtml}
          </div>
          <button class="add-btn ripple-btn" onclick="addToCart(${p.id}, event)" aria-label="Add ${p.name} to cart">
            <i class="fa-solid fa-cart-plus"></i> Add
          </button>
        </div>
      </div>
    </div>`;
}

function renderFeatured() {
  const featured = products.filter(p => p.tag).slice(0, 8);
  document.getElementById('featuredGrid').innerHTML = featured.map(productCardHTML).join('');
}

function renderCategoryGrid(cat, subcat) {
  const gridId = cat + 'Grid';
  let filtered = products.filter(p => p.cat === cat);
  if (subcat !== 'all') filtered = filtered.filter(p => p.subcat === subcat);
  const grid = document.getElementById(gridId);
  if (!grid) return;
  if (filtered.length === 0) {
    grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align:center; padding: 60px;"><i class="fa-solid fa-ghost" style="font-size:3rem; color:#cbd5e1; margin-bottom:16px;"></i><br/><h3 style="color:var(--navy);">Nothing here yet!</h3><p style="color:var(--gray);">No products found in this filter.</p></div>';
  } else {
    grid.innerHTML = filtered.map(productCardHTML).join('');
  }
}

function filterProducts(cat, subcat, btn) {
  document.querySelectorAll(`#page-${cat} .filter-btn`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCategoryGrid(cat, subcat);
}

// ===== SEARCH =====
function handleNavSearch(val) {
  document.getElementById('heroSearch').value = val;
  if (val.length > 1) doSearch(val);
}

function handleHeroSearch(val) {
  document.getElementById('navSearch').value = val;
}

function doHeroSearch() {
  const val = document.getElementById('heroSearch').value;
  if (val.length > 0) doSearch(val);
}

function doSearch(val) {
  const q = val.toLowerCase();
  const results = products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q) ||
    p.cat.toLowerCase().includes(q)
  );
  document.getElementById('searchTitle').textContent = `Results for "${val}"`;
  document.getElementById('searchCount').textContent = results.length + ' product' + (results.length !== 1 ? 's' : '') + ' found';
  const grid = document.getElementById('searchGrid');
  if (results.length === 0) {
    grid.innerHTML = '<div class="no-results" style="grid-column: 1/-1; text-align:center; padding: 60px;"><i class="fa-solid fa-magnifying-glass" style="font-size:3rem; color:#cbd5e1; margin-bottom:16px;"></i><br/><h3 style="color:var(--navy);">No Match Found</h3><p style="color:var(--gray);">Try searching for "Maths" or "Pens".</p></div>';
  } else {
    grid.innerHTML = results.map(productCardHTML).join('');
  }
  showPage('search');
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ===== TOAST NOTIFICATIONS =====
let toastTimer;
function showToast(icon, msg) {
  const t = document.getElementById('toast');
  document.getElementById('toastIcon').innerHTML = icon;
  document.getElementById('toastMsg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}
// ===== INIT =====
window.onload = () => {
    renderFeatured();
    updateCartUI(); 
    
    // Initialize AOS AFTER the page layout is fully established
    AOS.init({ 
        duration: 800, 
        once: true, 
        offset: 50 
    });
    
    // Force a recalculation a split second later to guarantee visibility
    setTimeout(() => {
        AOS.refresh();
    }, 200);
};
