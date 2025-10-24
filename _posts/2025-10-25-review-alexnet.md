---
layout: post
title: "ML Notes: Review Mendalam Arsitektur AlexNet"
author: "Alex Nugraha"
date: 2025-10-22 10:00:00 +0700
description: "Kajian lengkap arsitektur AlexNet."
tags: ["Deep Learning", "CNN", "AlexNet", "Machine Learning", "Python"]
---


## 1. Pendahuluan

AlexNet merupakan salah satu model Convolutional Neural Network (CNN) paling berpengaruh dalam sejarah pembelajaran mendalam. Model ini dikembangkan oleh **Alex Krizhevsky**, bersama **Ilya Sutskever** dan **Geoffrey Hinton** dari University of Toronto. Arsitektur ini memenangkan kompetisi **ImageNet Large Scale Visual Recognition Challenge (ILSVRC) 2012** dengan tingkat kesalahan (error rate) jauh lebih rendah dibanding pesaing lainnya.

Kemenangan AlexNet menandai titik balik perkembangan *deep learning*, karena menunjukkan bahwa jaringan saraf dalam dengan banyak lapisan dapat dilatih secara efektif menggunakan GPU dan data dalam jumlah besar.

---

## 2. Arsitektur AlexNet

AlexNet terdiri dari **8 lapisan pembelajaran**, yang meliputi **5 lapisan konvolusi** dan **3 lapisan fully connected (FC)**. Setiap lapisan konvolusi diikuti oleh fungsi aktivasi ReLU, beberapa di antaranya diikuti oleh *max pooling*, dan terdapat juga lapisan *dropout* untuk mencegah overfitting.

### Rincian Arsitektur

| Lapisan | Jenis | Ukuran Kernel / Neuron | Jumlah Filter | Aktivasi | Pooling | Dropout |
|----------|-------|------------------------|----------------|------------|----------|----------|
| 1 | Convolution | 11×11, stride 4 | 96 | ReLU | Max Pool (3×3, stride 2) | - |
| 2 | Convolution | 5×5 | 256 | ReLU | Max Pool (3×3, stride 2) | - |
| 3 | Convolution | 3×3 | 384 | ReLU | - | - |
| 4 | Convolution | 3×3 | 384 | ReLU | - | - |
| 5 | Convolution | 3×3 | 256 | ReLU | Max Pool (3×3, stride 2) | - |
| 6 | Fully Connected | 4096 neuron | - | ReLU | - | Ya |
| 7 | Fully Connected | 4096 neuron | - | ReLU | - | Ya |
| 8 | Fully Connected | 1000 neuron (kelas) | - | Softmax | - | - |

Model ini awalnya dilatih pada **dua GPU** secara paralel untuk mengatasi keterbatasan memori GPU saat itu. Setiap GPU memproses sebagian dari neuron dan hasilnya digabungkan di lapisan tertentu.

---

## 3. Inovasi Utama

Beberapa inovasi penting dari AlexNet yang membuatnya unggul:

1. **Penggunaan ReLU (Rectified Linear Unit)**  
   Fungsi aktivasi ReLU mempercepat proses konvergensi pelatihan dibandingkan sigmoid atau tanh.

2. **Training pada GPU**  
   AlexNet adalah salah satu model pertama yang memanfaatkan *GPU computing* secara ekstensif, mempercepat proses pelatihan hingga 10× lebih cepat dibanding CPU.

3. **Dropout**  
   Digunakan pada lapisan fully connected untuk mengurangi *overfitting*.

4. **Data Augmentation**  
   Meningkatkan variasi data pelatihan melalui translasi, rotasi kecil, dan flipping horizontal.

5. **Local Response Normalization (LRN)**  
   Membantu menormalisasi aktivasi antar neuron dan meningkatkan generalisasi.

---

## 4. Hasil Eksperimen

Model ini diuji pada dataset **ImageNet LSVRC-2012** yang berisi lebih dari 1,2 juta gambar dengan 1000 kelas.

| Metrik | Nilai |
|--------|--------|
| Top-1 Error | 37.5% |
| Top-5 Error | 17.0% |

Angka ini mengungguli model peringkat kedua dengan selisih lebih dari **10%**, yang merupakan pencapaian signifikan di bidang visi komputer.

---

## 5. Visualisasi dan Analisis Hasil Training

Selama pelatihan, AlexNet menunjukkan karakteristik sebagai berikut:

- **Konvergensi cepat**: berkat ReLU, pelatihan berlangsung 6× lebih cepat dibanding fungsi aktivasi tradisional.  
- **Overfitting berhasil dikurangi**: berkat *dropout* dan *data augmentation*.  
- **Filter konvolusi awal** cenderung mendeteksi tepi dan warna, sedangkan lapisan lebih dalam menangkap bentuk kompleks.  

### Deskripsi Visualisasi

Jika divisualisasikan, filter pada lapisan pertama akan tampak seperti pola tepi dan warna dasar, sementara lapisan lebih dalam memperlihatkan fitur seperti mata, roda, atau tekstur hewan.

```python
# Contoh visualisasi fitur (pseudo code)
import matplotlib.pyplot as plt
import torch

model = torchvision.models.alexnet(pretrained=True)
filters = model.features[0].weight.data.clone()

fig, axes = plt.subplots(8, 12, figsize=(12, 8))
for i, ax in enumerate(axes.flat):
    if i < filters.shape[0]:
        img = filters[i].permute(1, 2, 0).numpy()
        ax.imshow((img - img.min()) / (img.max() - img.min()))
        ax.axis("off")
plt.show()
```

---

## 6. Kelebihan dan Kekurangan

### Kelebihan
- Memperkenalkan ReLU dan Dropout secara efektif.
- Meningkatkan akurasi secara drastis di kompetisi ImageNet.
- Dapat dilatih dengan efisien menggunakan GPU.

### Kekurangan
- Arsitektur relatif besar (lebih dari 60 juta parameter).
- Membutuhkan daya komputasi dan memori besar.
- Struktur layer masih sederhana dibanding CNN modern seperti VGG, ResNet, atau EfficientNet.

---

## 7. Dampak dan Pengaruh

AlexNet membuka jalan bagi perkembangan CNN yang lebih dalam seperti **VGGNet**, **GoogLeNet (Inception)**, dan **ResNet**.  
Model ini juga menjadi titik awal penerapan *deep learning* di berbagai bidang seperti:
- Pengenalan wajah
- Deteksi objek
- Analisis citra medis
- Pengendaraan otonom

---

## 8. Referensi

1. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). *ImageNet Classification with Deep Convolutional Neural Networks*. In NIPS.
2. LeCun, Y., Bengio, Y., & Hinton, G. (2015). *Deep learning*. Nature, 521(7553), 436–444.
3. AlexNet Paper (arXiv:1404.5997) – https://arxiv.org/abs/1404.5997
4. ImageNet Challenge – http://www.image-net.org/challenges/LSVRC/

---

**Kesimpulan:**  
AlexNet merupakan tonggak penting dalam sejarah *deep learning* yang membuktikan efektivitas jaringan saraf konvolusional dalam tugas pengenalan gambar skala besar.  
Inovasi seperti penggunaan ReLU, dropout, GPU, dan data augmentation menjadikan AlexNet dasar bagi kemajuan arsitektur modern hingga saat ini.
