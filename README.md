# 🎬 Movie App

Bu proje, React ve Node.js tabanlı basit bir **Film Yönetim Uygulamasıdır**. Kullanıcılar filmleri listeleyebilir,filtreleyebilir, detaylarını görüntüleyebilir ve film silebilir.

****************************
![bandicam 2026-01-18 18-04-26-982](https://github.com/user-attachments/assets/341bd84e-8cb7-4431-ac3d-81aa09791717)
*****************************
![bandicam 2026-01-18 18-05-01-487](https://github.com/user-attachments/assets/fe2554fd-c104-4db9-98c6-130b81559685)
******************
![bandicam 2026-01-18 18-05-31-686](https://github.com/user-attachments/assets/2f80078f-1b22-4b56-a8b2-8c2cf2fadf7d)
************************

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
* nodemon

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

| Method | Endpoint                     | Açıklama             |
| ------ | ---------------------------- | -------------------- |
| GET    | /api/movies                  | Tüm filmleri getirir |
| GET    | /api/movies/:id              | Tek film detayı      |
| GET    | /api/movies?search=metin     | Film filtreleme      |
| POST   | /api/movies                  | Yeni film ekleme     |
| DELETE | /api/movies/:id              | Film silme           |


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

## 📌 Notlar

Bu proje eğitim ve pratik amaçlı geliştirilmiştir. Gerçek bir veritabanı yerine JSON dosyası kullanılmıştır.

---

