import React, { Component } from 'react'
import {CiCirclePlus} from 'react-icons/ci'
import './Firma.css'
import {CiCircleAlert} from 'react-icons/ci'
export default class Firma extends Component {
  render() {
    return (
        <div>

      <div className='klm1'>
        <div className="firmadiv">
        <div className="firma1">
            <h1>Компания</h1><button>+ТЕГ</button>
        </div>
        <div className="line"></div>
        <div className="firma2">
            <h1>Рабочий телефон</h1><button><CiCirclePlus/></button><div className="line1"></div><input className='inputPlace' type="text"placeholder='+7 999 888 77 66' />
        </div>
        <div className="firma3">
            <h1>Рабочий E-mail</h1><button><CiCirclePlus/></button><div className="line1"></div><input className='inputPlace' type="text" placeholder='mymail@pochta.com'/>
        </div>
        <div className="firma4">
            <h1>Сайт</h1><button><CiCirclePlus/></button><div className="line1"></div><input className='inputPlace' type="text"placeholder='vk.com/id32450354' />
        </div>
        <div className="line"></div>
        <div className="firma5">
            <h1>Соц сети</h1><button><CiCirclePlus/></button><div className="line1"></div><input className='inputPlace' type="text"placeholder='ООО АРТГЕНТ' />
        </div>
        <div className="firma6">
            <h1>Ген Контакт</h1><button><CiCirclePlus/></button><div className="line1"></div><input className='inputPlace' type="text" placeholder='+7 999 888 77 66'/>
        </div>
        <div className="line"></div>
        <div className="firma7">
            <h1>Примечание</h1><button><CiCirclePlus/></button><div className="line2"></div><input className='inputPlace' type="text" placeholder='Тут может быть большой текст. Менеджеры могут писать сюда всю полезную и интересуную информацию о клиенте.' />
        </div>
        <div className="firma_div">
        <button className='firma_butt1'>Редактировать</button><button className='firma_butt2'>Закрыть</button>
        </div>
        </div>
      </div>
        <div className="firmabottom">
        <CiCircleAlert className='icon'/><div className="bottom2">
            <p>Клиенты - редактирование\добавление. </p>
            <span>- Имя и фамилия - поле импут. При нажатии на +ТЕГ открываем список с тегами. Если нажать на иконку (+) то появляеться новое_поле_2 для дополнительных данных. Кнопка [Редактировать] как бы снимает замок с уже добавленых полей и можно добавлять новые. Историю клиента пока не трогаем, туда будет добавлятся вся информация по клиенту: Когда попал в базу, откуда пришел и так далее...</span>
        </div>
        </div>
      </div>

    )
  }
}