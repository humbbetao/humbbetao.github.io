import telebot
import urllib
import unidecode
import pandas as pd
import json
import os

bot = telebot.TeleBot("1137737776:AAGsXD5pfSTrAWp4W_5oE3W4dnDgMW_4GuI")

sisu = pd.read_csv("dados_sisu.csv",encoding="iso-8859-1")
profissoes = sisu.Curso.values
profissoes = [unidecode.unidecode(x.lower()) for x in profissoes]

def procura_profissao(text):    
    return unidecode.unidecode(text.lower()) in profissoes


def cadastro_usuario(id_telegram, nome_comp, idade, periodo_estd):
    
    if not os.path.isfile(str(id_telegram)+"_"+nome_comp.split(" ")[0].lower()+".json"):
        usuario = {'id_telegram' : id_telegram, 'nome_completo' : nome_comp, 'idade' : idade, 'periodo_estd' : periodo_estd, 'saldo' : 0, 'trilhas': {}}
        js = json.dumps(usuario)
        
        with open(str(id_telegram)+"_"+nome_comp.split(" ")[0].lower()+".json", "a") as target:
            json.dump(js,target)

def ler_cadastro(id_telegram, nome_comp):
    with open(id_telegram+"_"+nome_comp.split[0].lower()+".json", "r") as target:
        js = json.load(target)
        print(js)

@bot.message_handler(commands=['start','help'])
def send_welcome(message):
    name = message.from_user.first_name
    if os.path.isfile(str(message.from_user.id)+"_"+name.lower()+".json"):
        welcome_message = f"""*Qual é o seu sonho {name}?*\n_Nos conte qual o seu sonho, o que você quer ser quando crescer?_\n\nPara mais informações use o comando /ajuda"""
        bot.reply_to(message,welcome_message,parse_mode= 'MarkdownV2')
    else:
        bot.reply_to(message,"Olá, antes de começar precisamos te conhecer melhor. Qual sua idade e melhor período para estudo (manhã,tarde,noite) separados por espaço(Ex: 14 tarde)?")

@bot.message_handler(regexp=r"\d{1,2} \w[a-zA-zã]*")
def regex(message):
    if message.from_user.last_name == None:
        lastname = "" 
    else:
        lastname = message.from_user.last_name
    cadastro_usuario(message.from_user.id,message.from_user.first_name+" "+lastname,message.text.split(" ")[0],message.text.split(" ")[1])
    bot.reply_to(message, "Informações cadastradas com sucesso. click em /start para começar o processo.")

@bot.message_handler(commands=['wakanda'])
def send_gif(message):
    gif = open('wakanda.gif','rb')
    bot.send_animation(message.chat.id,gif)

@bot.message_handler(commands=['trilhas'])
def mostra_trilha(message):
    markup = telebot.types.ReplyKeyboardMarkup(row_width=1, one_time_keyboard=True)
    _ = [markup.row(telebot.types.KeyboardButton(x)) for x in sisu.Curso.values]
    bot.send_message(message.chat.id,f'As trilhas disponíveis são:',parse_mode= 'MarkdownV2',reply_markup= markup )

@bot.message_handler(commands=['pontos'])
def mostra_saldo(message):
    bot.send_message(message.chat.id,f'O seu saldo é R$ 5,00',parse_mode= 'MarkdownV2')

@bot.message_handler(commands=['ajuda'])
def ajuda(message):
    messages = """/ajuda: Imprime todos os comandos disponíveis;
/trilhas: Lista as trilhas disponíveis;
/pontos: Mostra a quantidade de pontos acumulados;
/corte: Mostra a nota de corte do SISU 2019 para o curso;
/start: Início do processo de trilhas."""
    bot.send_message(message.chat.id,messages)


@bot.message_handler(commands=['corte'])
def nota_corte(message):
    tokens = message.text.split(' ',1)
    if len(tokens) == 1:
        markup = telebot.types.ReplyKeyboardMarkup(row_width=1, one_time_keyboard=True)
        _ = [markup.row(telebot.types.KeyboardButton(f"/corte {x}")) for x in sisu.Curso.values]

        bot.send_message(message.chat.id,f'Notas de corte disponíveis:',parse_mode= 'MarkdownV2',reply_markup= markup )
    else:
        bot.reply_to(message,f"A nota de corte para o curso de {tokens[-1]} é {sisu[sisu['Curso']==tokens[-1]]['Nota'].values[0]}.") 

@bot.message_handler(func=lambda m: True)
def echo_all(message):
    teste = procura_profissao(message.text)
    texto = message.text
    if "robo" in unidecode.unidecode(texto.lower()):
        texto = "Engenheiro Mecatrônico"
        teste = True

    if teste:        
        bot.send_message(message.chat.id,f"Uhull que legal que você quer cursar {texto}. Veja a trilha que preparamos para você 🙂 http://bit.ly/alva2020")
    else:
        bot.reply_to(message,'Que pena, ainda não temos uma trilha para essa profissão :(. Digite /trilhas para consultar as trilhas disponíveis.')

bot.polling()

if __name__=="__main__ ":
    bot.polling()