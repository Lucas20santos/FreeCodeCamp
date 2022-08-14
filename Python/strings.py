name = 'Lucas'

print('Hi, How are you')   # Strings are text
print('I\'m ', name, '!')

# Podemos Pegar letra por letra da string name
# basta usar os conchetes e passar os indices 
# das respectivas letras
# Os indices no python começam do 0 até length - 1
# Ou começam do -length até -1

print("===================")
print(name[0])          # L
print(name[1])          # u
print(name[2])          # c
print(name[3])          # a
print(name[4])          # s
print("===================")
print(name[-5])         # L
print(name[-4])         # u
print(name[-3])         # c
print(name[-2])         # a
print(name[-1])         # s
print("===================")

# Metodo upper()
print(name.upper())
# Metodo lower()
print(name.lower())
# Verificar se a string é uppercase or lowercase
print(name.islower())
print(name.isupper())
print(name.lower().islower())

# Verificando o tamanho da string
print(len(name))

# Index de uma letra dentro da string
print(name.index('L'))
# print(name.index('o'))  # retornará uma valueError: substring not found

