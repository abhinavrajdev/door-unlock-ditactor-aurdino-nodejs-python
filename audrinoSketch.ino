int Rpin =2;

void setup() {
  Serial.begin(9600);
  pinMode(Rpin, INPUT);
}

void loop() {
  int value = digitalRead(Rpin);
  Serial.println(value);
  delay(1); 
}
