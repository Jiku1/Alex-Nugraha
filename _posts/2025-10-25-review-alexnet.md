---
layout:post
title: "ML Notes: Review AlexNet & Pelatihan Python"
author: "Alex Nugraha"
date: "2025-10-25"
description: "Review arsitektur AlexNet, pelatihan CNN dengan Python, serta hasil grafik accuracy & loss training."
tags: ["Deep Learning", "CNN", "AlexNet", "Machine Learning"]
---

## 🧠 Pendahuluan

Catatan ini membahas tentang **AlexNet**, salah satu model penting dalam sejarah *Deep Learning*, serta contoh **pelatihan model CNN menggunakan Python**.  
Selain itu, ditampilkan pula **grafik hasil training (akurasi & loss)** untuk memberikan gambaran performa model.

---

## 🔍 Review Singkat: AlexNet

**AlexNet** merupakan arsitektur *Convolutional Neural Network (CNN)* yang diperkenalkan oleh  
**Alex Krizhevsky**, **Ilya Sutskever**, dan **Geoffrey Hinton** dalam paper legendaris  
> *ImageNet Classification with Deep Convolutional Neural Networks* (NeurIPS 2012).

Model ini **memenangkan kompetisi ILSVRC 2012** dengan selisih besar, menurunkan *top-5 error* dari sekitar 26% menjadi 15%.  
Kemenangan ini menjadi tonggak penting dalam kebangkitan *deep learning* modern.

---

## 🏗️ Arsitektur AlexNet

Secara umum, AlexNet terdiri dari **8 lapisan utama**:

1. **5 Convolutional layers** — mengekstraksi fitur dari gambar.  
   Lapisan pertama menggunakan *filter* 11×11 (stride 4) untuk fitur kasar,  
   sedangkan lapisan berikutnya memakai *filter* 5×5 dan 3×3 untuk fitur halus.  
2. **3 Fully Connected layers** — melakukan klasifikasi berdasarkan fitur yang dipelajari.
3. **ReLU activation function** — mempercepat konvergensi & menghindari *vanishing gradient*.  
4. **Dropout** — membantu mencegah *overfitting*.  
5. **Data augmentation** — rotasi, flipping, dan pergeseran gambar untuk memperkaya data.  
6. **Local Response Normalization (LRN)** — membantu generalisasi fitur.

---

## ✅ Kelebihan AlexNet

- 📉 **Efektif:** menurunkan *top-5 error* dari ~26% menjadi ~15%.  
- 🚀 **Pionir Deep Learning modern:** menginspirasi arsitektur seperti VGG, ResNet, dan DenseNet.  
- 🧩 **Peningkatan generalisasi** berkat kombinasi Dropout dan ReLU.

---

## ⚠️ Kekurangan AlexNet

- 💾 **Banyak parameter (~60 juta)** — butuh GPU untuk training yang efisien.  
- 🔧 **Belum menggunakan Batch Normalization**, sehingga *training* sensitif terhadap *learning rate*.  
- 🧮 **LRN kini jarang digunakan**, karena kurang efektif dibanding *BatchNorm*.

---

## 🌍 Aplikasi AlexNet

AlexNet telah diterapkan di berbagai bidang:

- 🕵️‍♂️ Deteksi objek  
- 🧬 Analisis medis (MRI, X-ray)  
- 🏙️ Smart City & IoT (pengenalan wajah, deteksi kendaraan)  
- 🎨 Segmentasi dan klasifikasi gambar umum

---

## 🧩 Pelatihan Model Python

Eksperimen dilakukan menggunakan:
- **Library:** TensorFlow / Keras, NumPy, Matplotlib  
- **Dataset:** CIFAR-10  
- **Metode:** `model.fit()` dengan *monitoring accuracy & loss*

Berikut contoh kode training sederhana:

```python
# assets/code/train_alexnet.py

import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.datasets import cifar10
import matplotlib.pyplot as plt

# Load dataset
(x_train, y_train), (x_test, y_test) = cifar10.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# Model AlexNet sederhana
model = models.Sequential([
    layers.Conv2D(96, (11,11), strides=4, activation='relu', input_shape=(32,32,3)),
    layers.MaxPooling2D((3,3), strides=2),
    layers.Conv2D(256, (5,5), padding='same', activation='relu'),
    layers.MaxPooling2D((3,3), strides=2),
    layers.Conv2D(384, (3,3), padding='same', activation='relu'),
    layers.Conv2D(384, (3,3), padding='same', activation='relu'),
    layers.Conv2D(256, (3,3), padding='same', activation='relu'),
    layers.Flatten(),
    layers.Dense(4096, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(4096, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(10, activation='softmax')
])

# Kompilasi & training
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
history = model.fit(x_train, y_train, epochs=10, validation_data=(x_test, y_test))
