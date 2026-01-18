# 🎬 Movie App

Bu proje, React ve Node.js tabanlı basit bir **Film Yönetim Uygulamasıdır**. Kullanıcılar filmleri listeleyebilir, detaylarını görüntüleyebilir ve film silebilir. Proje, frontend ve backend arasındaki temel CRUD mantığını öğrenmek ve pekiştirmek amacıyla geliştirilmiştir.

---

## 🚀 Kullanılan Teknolojiler

### Frontend

* React
* React Router DOM
* @tanstack/react-query
* Axios
* Tailwind CSS
* React Icons
* React Toastify

### Backend

* Node.js
* HTTP Module
* File System (fs)
* JSON tabanlı veri saklama

---

## 📁 Proje Özellikleri

* 📃 Film listesini görüntüleme
* 🔍 Film detay sayfası
* ➕ Yeni film ekleme (Create Page)
* 🗑️ Film silme işlemi
* ⏳ Yüklenme (Loader) ve hata (Error) yönetimi
* 🔔 Bildirimler (Toast mesajları)
* 🎨 Tailwind CSS ile responsive ve okunabilir arayüz

---

## 🧭 Sayfalar

### Home Page

* Tüm filmler listelenir
* Her film detay sayfasına yönlendirilebilir

### Detail Page

* Seçilen filmin tüm bilgileri görüntülenir
* Film silme butonu bulunur

### Create Page

* Yeni film eklemek için form alanları içerir
* Form doğrulamaları yapılır
* Başarılı ekleme sonrası ana sayfaya yönlendirme yapılır

---

## 🔗 API Endpointleri

| Method | Endpoint        | Açıklama             |
| ------ | --------------- | -------------------- |
| GET    | /api/movies     | Tüm filmleri getirir |
| GET    | /api/movies/:id | Tek film detayı      |
| POST   | /api/movies     | Yeni film ekleme     |
| DELETE | /api/movies/:id | Film silme           |

---

## 🧪 Örnek Film Datası

```json
{
  "title": "Başlangıç",
  "year": "2010",
  "genre": ["Bilim Kurgu", "Aksiyon"],
  "rating": "8.8",
  "description": "Bir grup hırsızın rüyalar üzerinden gerçekleştirdiği sıra dışı görev.",
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio"],
  "duration": "2s 28dk",
  "language": "İngilizce",
  "id": "uuid"
}
```

---

## ⚙️ Kurulum

```bash
# Projeyi klonla
git clone https://github.com/kullanici-adi/movie-app.git


# Backend dizinine gir
cd backend


# Backend bağımlılıklarını yükle
npm install


# Backend'i çalıştır
npm start


# Frontend dizinine gir
cd ../frontend


# Frontend bağımlılıklarını yükle
npm install


# Frontend'i çalıştır
npm run dev
```

> Backend ve frontend aynı projede çalışacak şekilde yapılandırılmıştır.

---

## 👩‍💻 Geliştirici

**Nurşah Tunçel**
Frontend Developer (React)

---

## 📌 Notlar

Bu proje eğitim ve pratik amaçlı geliştirilmiştir. Gerçek bir veritabanı yerine JSON dosyası kullanılmıştır.

---

