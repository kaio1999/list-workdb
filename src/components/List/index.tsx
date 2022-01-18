import React from "react";
import axios from "axios";
import DivGeneral, {
  ModalSignUp,
  DivName,
  List,
  DivList,
  ListSign,
  Describe,
  ListDescribe,
  BtnDelete,
  DeletModal,
  Button,
  BtnClean
} from "./styled";

const UserList = () => {

  const [loading, setLoading] = React.useState<any>(true);
  const [data, setData] = React.useState<any>([]);
  const [deleteUser, setDeleteUser] = React.useState(false);
  const [deleteAll, setDeleteAll] = React.useState(false)

  const url = `https://games-dd788-default-rtdb.firebaseio.com/.json`;

  React.useEffect(() => {
    axios.get(url).then((res) => {
      if (res.data) {
        setData(Object.entries(res.data));
        setLoading(false);
      }
    });
  }, []);

  data.sort(function (a: any, b: any) {
    if (a[1].name < b[1].name) {
      return -1;
    } else {
      return true;
    }
  });

  const Delete = (id: string) => {
    const url = `https://games-dd788-default-rtdb.firebaseio.com/${id}/.json`;
    axios.delete(url);
    setDeleteUser(true)
    window.location.reload()
  }

  const CleanUsers = () => {
    const url = `https://games-dd788-default-rtdb.firebaseio.com/.json`;
    axios.delete(url);
    setDeleteAll(true)
    window.location.reload()
  }


  return (
    <>
      <DivGeneral>
        {loading ? (
          <img className="Loading" src="../assets/loading-buffering.gif" />
        ) : (
          <>
            {deleteUser || deleteAll ? (
              <DeletModal className='errorSend'>
                <div>
                  <span>{deleteUser ? 'Usuario deletado com sucesso!' : deleteAll && 'Usuarios excluidos com sucesso!'}</span>
                  <Button onClick={() => {
                    setDeleteUser(false)
                    setDeleteAll(false)
                    }}>Ok</Button>
                </div>
              </DeletModal>
            ) : (
              <>
                <BtnClean onClick={() => CleanUsers()}>Limpar tabela</BtnClean>
                <ModalSignUp>
                  <DivName>
                    <Describe marginLeft="25px">Nome</Describe>
                    <Describe>Sobrenome</Describe>
                    <Describe display="none">Altura</Describe>
                    <Describe display="none">Data de nascimento</Describe>
                    <Describe>idade</Describe>
                    <Describe>Ações</Describe>
                  </DivName>
                  <DivList>
                    {data.map((item: any) => {
                      console.log(item, 'item')
                      return (
                        <List>
                          <ListDescribe>{item[1].name}</ListDescribe>
                          <ListDescribe>{item[1].surname}</ListDescribe>
                          <ListDescribe>
                            {item[1].height}
                          </ListDescribe>
                          <ListDescribe>
                            {item[1].bornDate}
                          </ListDescribe>
                          <ListDescribe>21</ListDescribe>
                          <BtnDelete onClick={() => Delete(item[0])}>deletar</BtnDelete>
                        </List>
                      );
                    })}
                  </DivList>
                </ModalSignUp>
              </>
            )}
          </>
        )}
      </DivGeneral>
    </>
  );
};

export default UserList;
