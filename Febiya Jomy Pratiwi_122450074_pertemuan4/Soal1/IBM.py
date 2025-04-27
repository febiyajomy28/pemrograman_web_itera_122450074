import pandas as pd
import numpy as np

Tinggi = float(input("Masukkan Tinggi Badan(cm) : "))
Berat = float(input("Masukkan Berat Badan(Kg) : "))
Classification = ""
#ubah cm ke m
Tinggi1 = Tinggi/100 
Tinggii = Tinggi1**2
#rumus BMI
BMI = Berat / Tinggii
print("BMI :", BMI)



#Pengkategorian 
if BMI < 18.5:
    Classification = "Berat badan kurang"
elif BMI < 25:
    Classification = "Berat badan normal"
elif BMI < 30:
    Classification = "Berat badan berlebih"
else :
    Classification = "Obesitas"

print(f" Classification: {Classification}")


