const services = {
  ar: [
    "توصيل بضائع من شخص ل شخص 🤝🎁📦📦",
    "توصيل من المطاعم (restaurant et pizzeria) 🍕🍟",
    "شراء من المطاعم (restaurant et pizzeria) 🍕🍟",
    "شراء من محلات المواد الغدائية (Alimentation)🛒",
    "شراء من الأسواق  (Marché)🥦🍎🍉🌶️🥕🥔🧄",
    "شراء  من عند الجزار (Boucherie)🥩🍗",
    "شراء من الصيدلية (pharmacie)💊💉🩹🩺🌡️",
    "شراء من المخبزة (boulangerie)🥖🥖🫓",
    "شراء الحلويات (Gâteau et pâtisserie) 🍰🍩🥐",
    "شراء من محل بيع العطور (parfums) 😍😍🫠",
    "شراء  مستلزمات (cosmétique) 🪥🧼🧴",
  ],
  fr: [
    "Livraison de biens de personne à personne 🤝🎁📦📦",
    "Livraison des restaurants (restaurant et pizzeria) 🍕🍟",
    "Achats des restaurants (restaurant et pizzeria) 🍕🍟",
    "Achats des magasins d'alimentation (Alimentation)🛒",
    "Achats des marchés (Marché)🥦🍎🍉🌶️🥕🥔🧄",
    "Achats chez le boucher (Boucherie)🥩🍗",
    "Achats à la pharmacie (pharmacie)💊💉🩹🩺🌡️",
    "Achats à la boulangerie (boulangerie)🥖🥖🫓",
    "Achats de pâtisseries (Gâteau et pâtisserie) 🍰🍩🥐",
    "Achats au magasin de parfums (parfums) 😍😍🫠",
    "Achats de produits cosmétiques (cosmétique) 🪥🧼🧴",
  ],
};

export const translations = {
  ar: {
    profile: "الملف الشخصي",
    fullName: "الإسم الكامل",
    phoneNumber: "رقم الهاتف",
    addressGps: "الموقع الجغرافي (عنوان المكان أو رابط GPS)",
    address: "الموقع الجغرافي",
    saveChanges: "حفظ التعديلات",
    cancel: "إلغاء",
    welcomeMessage: "👋 مرحبا بيكم عند",
    deliveryService: "خدمات finOu",
    orderNow: "أطلب الآن",
    ourServices: "خدماتنا",
    withFinOu:
      "مع finOu ينقص عليك التعب و التخمام وين تكون أنت دير الطلب و finOu يشري و يجيبلك",
    urgentOrder: "AllO finOu جيبلي Urgent 🛵🔥",
    contactUs: "إتصل بنا :",
    phoneNumbers: ["05 59 70 52 47", "06 98 74 77 82", "05 42 41 81 50"],
    snapchat: "Finou Livraison",
    facebook: "Finou Livraison",
    quickLinks: "روابط سريعة :",
    myOrders: "طلبياتي",
    addProduct: "إضافة طلب آخر",
    productList: "قائمة الطلبيات",
    categoryLabel: "فئة الطلبيات",
    receiverName: "الإسم الكامل للمرسل إليه",
    receiverPhone: "رقم هاتف المرسل إليه",
    receiverAddress: "الموقع الجغرافي للمرسل إليه (عنوان المكان أو رابط GPS)",
    submitOrder: "إرسال الطلبيات",
    submittingOrder: "جاري الإرسال...",
    selectCategory: "إختر فئة",
    invalidPhoneNumber: "يرجى إدخال رقم هاتف صالح.",
    fillAllFields: "الرجاء ملء جميع الحقول.",
    fillReceiverFields: "الرجاء ملء جميع الحقول الخاصة بالمرسل إليه.",
    submitError: "حدث خطأ أثناء إرسال الطلبيات. الرجاء المحاولة مرة أخرى.",
    submitSuccess: "تم إرسال الطلبيات بنجاح!",
    orderFromFinou: "أطلب من عند ",
    orderNum: "الطلب رقم",
    myOrdersTitle: "الطلبيات الخاصة بك",
    loadingOrders: "جاري تحميل الطلبيات ...",
    noOrders: "لم تقم بأي طلبيات",
    cancellationNote: "ملاحظة : يمكنك فقط إلغاء الطلبيات التي لم يتم تأكيدها",
    getError: "حدث خطأ أثناء جلب الطلبيات. الرجاء المحاولة مرة أخرى.",
    confirmDelete: "هل أنت متأكد من إلغائك للطلب ؟",
    deleteError: "حدث خطأ أثناء حذف الطلب. الرجاء المحاولة مرة أخرى.",
    deleteSuccess: "تم حذف الطلب بنجاح!",
    name: "الإسم",
    phone: "رقم الهاتف",
    category: "فئة المشتريات",
    products: "المنتجات",
    receiverAddressHere: "عنوان المرسل إليه",
    orderStatus: "حالة الطلب",
    pending: "قيد الإنتظار",
    confirmed: "تم تأكيده",
    cancelOrder: "إلغاء الطلب",
  },
  fr: {
    profile: "Profil",
    fullName: "Nom complet",
    phoneNumber: "Numéro de téléphone",
    addressGps: "Adresse (Lieu address ou lien GPS)",
    address: "Address",
    saveChanges: "Enregistrer",
    cancel: "Annuler",
    welcomeMessage: "👋 Bienvenue chez",
    deliveryService: "Services finOu",
    orderNow: "Commandez",
    ourServices: "Nos services",
    withFinOu:
      "Avec finOu, facilitez-vous la vie ! Où que vous soyez, passez commande et finOu s’occupe d’acheter et de vous livrer.",
    urgentOrder: "AllO finOu, livre-moi en urgence 🛵🔥",
    contactUs: "Contactez-nous :",
    phoneNumbers: ["05 59 70 52 47", "06 98 74 77 82", "05 42 41 81 50"],
    snapchat: "Finou Livraison",
    facebook: "Finou Livraison",
    quickLinks: "Liens rapides :",
    myOrders: "Mes commandes",
    addProduct: "Ajouter une autre commande",
    productList: "Liste des commandes",
    categoryLabel: "Catégorie des commandes",
    receiverName: "Nom complet du destinataire",
    receiverPhone: "Numéro de téléphone du destinataire",
    receiverAddress: "Adresse du destinataire (Lieu address ou lien GPS)",
    submitOrder: "Envoyer les commandes",
    submittingOrder: "Envoi en cours...",
    selectCategory: "Choisissez une catégorie",
    invalidPhoneNumber: "Veuillez entrer un numéro de téléphone valide.",
    fillAllFields: "Veuillez remplir tous les champs.",
    fillReceiverFields: "Veuillez remplir tous les champs du destinataire.",
    submitError:
      "Une erreur est survenue lors de l'envoi des commandes. Veuillez réessayer.",
    submitSuccess: "Les commandes ont été envoyées avec succès !",
    orderFromFinou: "Commande chez ",
    orderNum: "Demande n°",
    myOrdersTitle: "Vos commandes",
    loadingOrders: "Chargement des commandes...",
    noOrders: "Aucune commande",
    cancellationNote:
      "Remarque : Vous ne pouvez annuler que les commandes non confirmées",
    getError:
      "Une erreur s'est produite lors de la récupération des commandes. Veuillez réessayer",
    confirmDelete: "Êtes-vous sûr d'annuler la commande ?",
    deleteError:
      "Une erreur est survenue lors de la suppression de la commande. Veuillez réessayer.",
    deleteSuccess: "La commande a été supprimée avec succès !",
    name: "Nom",
    phone: "Numéro de téléphone",
    category: "Catégorie des achats",
    products: "Produits",
    receiverAddressHere: "Adresse du destinataire",
    orderStatus: "État de la commande",
    pending: "En attente",
    confirmed: "Confirmé",
    cancelOrder: "Annuler la commande",
  },
};

export default services;
