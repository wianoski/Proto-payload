long humi = 0,
hdop = 0,
alti = 0,
roll = 0,
pitch = 0,
yaw = 0,
temp = 0,
gas = 0;

float latitude = -1.23456, longitude = 20.123456, anjay = 0.5;

void setup(){
Serial.begin(57600);
}

bool start;


void loop(){
  if (Serial.available() > 0) {
    char command = (char)Serial.read();

    if (command == '1'){
      start = true;
    } else if (command == '0') {
      start = false;
    } 
  }
   if (start){
    humi = random(0,100);
    temp = random(1,150);
    roll = random(-150,200);
    yaw = random(-160,140);
    pitch = random(-110,200);
    gas = random(0,150);
    hdop = random(20,300);
    latitude = latitude + anjay;
    longitude = longitude + anjay;
    
    Serial.print(" 69 ");
    Serial.print("*");
    Serial.print(humi);
    Serial.print("*");
    Serial.print(temp);
    Serial.print("*");
    Serial.print(roll);
    Serial.print("*");
    Serial.print(yaw);
    Serial.print("*");
    Serial.print(pitch);
    Serial.print("*");
    Serial.print(gas);
    Serial.print("*");
    Serial.print(hdop);
    Serial.print("*");
    Serial.print(latitude);
    Serial.print("*");
    Serial.print(longitude);
    Serial.println();
   }

delay(100);
}
