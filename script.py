import serial
import requests

serial_speed = 9600
serial_port = '/dev/cu.usbmodem101'
ser = serial.Serial(serial_port, serial_speed, timeout = 1)


while True:
     data = ser.readline()
     if data:
          to_str= str(data, encoding='utf-8')
          print(to_str)
          
          if (data == b'1\r\n' ):
               r = requests.get("https://sense.abhraj.com/setStatsLock")
          else: 
               r = requests.get("https://sense.abhraj.com/setStatsUnlock")
               print("unlo")