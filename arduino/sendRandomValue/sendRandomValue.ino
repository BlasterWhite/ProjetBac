#include <SPI.h>
#include <Ethernet.h>
#include <EthernetUdp.h>

EthernetUDP Udp;
byte mac[] = {0x90, 0xA2, 0xDA, 0x0D, 0x5C, 0x18};
IPAddress ip(192,168,1,29);
unsigned int localport = 8888;

IPAddress remoteIP(192,168,1,20);
unsigned int remotePort = 8886;
int sensorValue = 0;
float value0 = 0;
int value1 = 0;
int value2 = 0;
int value3 = 0;
bool value4 = 0;

void setup(){
 Serial.begin(9600);
 Serial.println("Serial OK");
 Ethernet.begin(mac,ip);
 Serial.print("IP : ");
 Serial.println(Ethernet.localIP());
 Udp.begin(localport);
}

void loop(){
  value0 = 0.01 * random(0, 100);
  value1 = random(-10, 45);
  value2 = random(0, 12);
  value3 = random(0, 12);
  value4 = random(0, 2);
  Udp.beginPacket(remoteIP, remotePort);
  Udp.print(value0);  
  Udp.print(" ");
  Udp.print(value1);
  Udp.print(" ");
  Udp.print(value2);
  Udp.print(" ");
  Udp.print(value3);
  Udp.print(" ");
  Udp.print(value4);
  Serial.print("Value 0 : ");
  Serial.println(value0);
  Serial.print("Value 1 : ");
  Serial.println(value1);
  Serial.print("Value 2 : ");
  Serial.println(value2);
  Serial.print("Value 3 : ");
  Serial.println(value3);
  Serial.print("Value 4 : ");
  Serial.println(value4);
  Serial.println("-------------------------");
  Udp.endPacket();
  delay(2000);
}
