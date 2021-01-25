import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import Zoom from 'react-reveal/Zoom';
import loadable from '@loadable/component';
import { withTranslation } from 'react-i18next';

import useForm from './useForm';
import validate from './validationRules';
import * as S from './styles';

const Block = loadable(() => import('../Block'));
const Input = loadable(() => import('../../common/Input'));
const Button = loadable(() => import('../../common/Button'));
const TextArea = loadable(() => import('../../common/TextArea'));

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Zoom cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Zoom>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t('Chat with us')}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>

          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);
