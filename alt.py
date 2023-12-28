import serial
import requests
ser = serial.Serial('/dev/cu.usbmodem101', 9600)
    
while True:
    bs = ser.readline()
    print(bs)
    if ( bs == b'1\r\n'):
        r = requests.get("http://127.0.0.1:5000/setStatsLock")
    else:
        r = requests.get("http://127.0.0.1:5000/setStatsUnlock")