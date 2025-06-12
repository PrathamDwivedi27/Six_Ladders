import { Kafka} from "kafkajs";
import fs from "fs";
import path from "path";
import { KAFKA_BROKER, KAFKA_USERNAME, KAFKA_PASSWORD } from "./server-config.js";
import logger from "../utils/logger.js";

const kafka =new Kafka ({
    brokers:[KAFKA_BROKER],
    ssl:{
        ca:[fs.readFileSync(path.resolve("src/config/ca.pem"),'utf-8')],
    },
    sasl:{
        username:KAFKA_USERNAME,
        password:KAFKA_PASSWORD,
        mechanism:"plain"
    }
})

let producer=null;

export async function createProducer(){
    if(producer) return producer;

    const _producer=kafka.producer();
    await _producer.connect();
    logger.info("Producer is connected");
    producer=_producer;
    return producer;
}

export async function produceMessage(mesasge){
    const producer=await createProducer();
    await producer.send({
        messages:[{key:`message-${Date.now()}`,value:mesasge}],
        topic:'Chatting'
    })
    return true;
}



export default kafka;