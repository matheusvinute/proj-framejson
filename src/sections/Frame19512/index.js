import { DB } from './db';

import * as S  from './style';

export const Frame19536 = () => {
    return (
        <S.Wrapper id={DB.frameName}>
            <S.Container data-section={"section_" + DB.frameName} >
                <S.ContentOne>
                    <p>Ola Ola</p>
                </S.ContentOne>
                <S.ContentTwo>
                    <S.Title tetx={DB.title} textAlign={DB.titleAlign} ></S.Title>
                        {DB.description}
                    <S.Columns>
                        {DB.description.map((descption, i) => (
                            <S.Item key={i} text={descption} />
                        ))}
                    </S.Columns>
                    <S.Button
                        dataElement={"button_" + DB.ButtonText }
                        label={DB.ButtonText}
                    />
                </S.ContentTwo>
            </S.Container>
        </S.Wrapper>
    )
}