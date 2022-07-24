# this code change the word1 for word2 in sentence
# exemple: sentence = I am a boy
# word1 = boy word2 = girl
# new sentence: i am a girl

sentence = input('Enter your sentence: ')
print('Your sentence is: ', sentence)
word1 = input('Enter the word to replace: ')
word2 = input('Enter the word to replace it with: ')
print(sentence.replace(word1, word2))
