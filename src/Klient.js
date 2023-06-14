import Table from 'react-bootstrap/Table';
import './Klient.css'
import {CiCircleAlert} from 'react-icons/ci'
function BasicExample() {
  return (
   <div className="klm1">
     <Table bordered hover>
      <thead>
        <tr className='tr'>
          <th>#</th>
          <th>Имя и Фамилия</th>
          <th>Телефон</th>
          <th>Соц сеть</th>
          <th>Е-маил</th>
          <th>Примечание</th>
          <th>ТЕГ</th>
          <td>:</td>
        </tr>
      </thead>
      <tbody>
        <tr className='tr'>
          <td>001</td>
          <td>Максим Галкиин</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>КЛИЕНТ</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
          <td>002</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
          <td>003</td>
          <td>Алла Пугачева</td>
          <td>+7 999 888 77 66</td>
          <td>vk.com/id422424</td>
          <td>mymail@pochta.ru</td>
          <td>Пришел от Лены</td>
          <td>-ЛИД</td>
          <td>:</td>

        </tr>
        <tr className='tr'>
            <td>004</td>
            <td>Хабиб</td>
            <td>+7 999 888 77 66</td>
            <td>vk.com/id422424</td>
            <td>mymail@pochta.ru</td>
            <td>Пришел от Лены</td>
            <td>-ЛИД</td>
            <td>:</td>

        </tr>
      </tbody>
      
    </Table>
     {/* <div className="klientdiv">
      <CiCircleAlert className="ci"/><div className="klientdiv1">
        <span>Обратный звонок.</span><p>Раздел, гдекуда попадают клиенты с формы заявки на сайте через виджет обратный звонок.</p>
      </div> </div> */}
   </div>
    
     

  );   
}

export default BasicExample;