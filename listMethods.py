list1 = [1, 2, 3, 4, 5]
list2 = ['banana', 'apples', 'mango', 'orange']

list1.extend(list2)
print(list2)
list2.append('cherry')
print(list2)
list2.insert(1, 'cherry')
print(list2)
list2.remove('cherry')
print(len(list2))
print(list1.sort(reverse=True))
