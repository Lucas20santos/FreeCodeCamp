"""Read Video and Image with OpenCV"""
import cv2 as cv

path = '/home/lucas/Documentos/Github/FreeCodeCamp/Python/OpenCV/img/foto1.png'

foto1 = cv.imread(path, 0)

cv.imshow('Dog', foto1)

cv.waitKey(0)
