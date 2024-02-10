import React, { useState } from 'react';
import axios from 'axios';
import * as S from './Index.Style';
import Input from '../../../components/Input/Input';

// ! 회원가입

interface FormData {
  userId: string;
  password: string;
  name: string;
  nickName: string;
  email: string;
}

function Index() {
  const idRegExp = /^[a-zA-Z0-9_]{4,15}$/;
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
  const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    name: '',
    nickName: '',
    email: '',
  });

  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    userId: '',
    password: '',
    name: '',
    nickName: '',
    email: '',
  });

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleInputChange =
    (name: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [name]: event.target.value,
      });

      setErrors({
        ...errors,
        [name]: '',
      });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      userId: '',
      password: '',
      confirmPassword: '',
      name: '',
      nickName: '',
      email: '',
    };

    if (!formData.userId) {
      newErrors.userId = '아이디를 입력해주세요.';
    } else if (!idRegExp.test(formData.userId)) {
      newErrors.userId = "4~15자의 영문, 숫자와 특수문자 '_'만 사용해주세요.";
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력하세요.';
    } else if (!passwordRegExp.test(formData.password)) {
      newErrors.password =
        '8~16자리 영문 대소문자, 숫자, 특수문자 중 3가지 이상 조합으로 만들어주세요.';
    }

    if (!formData.name) {
      newErrors.name = '이름을 입력하세요.';
    }

    if (!formData.email) {
      newErrors.email = '이메일을 입력하세요.';
    } else if (!emailRegExp.test(formData.email)) {
      newErrors.email =
        '잘못된 이메일 주소입니다. 이메일 주소를 정확하게 입력해주세요.';
    }

    // 에러
    if (Object.values(newErrors).some(error => !!error)) {
      setErrors(newErrors);
      return;
    }

    try {
      // json-server에서 제공하는 REST API 엔드포인트를 사용합니다.
      const response = await axios.post('http://localhost:5000/users', {
        userId: formData.userId,
        password: formData.password,
        name: formData.name,
        nickName: formData.nickName,
        email: formData.email,
      });

      // 성공적인 회원가입 후의 로직
      console.log('회원 가입 성공:', response.data);
      // 여기에 성공 시 추가적인 로직을 구현할 수 있습니다. 예: 로그인 페이지로 리디렉션
    } catch (error) {
      // 오류 처리
      console.error('회원 가입 실패:', error);
      // 여기에 오류 시 처리 로직을 구현할 수 있습니다. 예: 오류 메시지 표시
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.ContainerInner>
        <S.Title>회원가입</S.Title>
        <Input
          label="아이디"
          type="id"
          name="userId"
          placeholder="4~15자리 / 영문, 숫자, 특수문자'_' 사용가능"
          error={!!errors.userId}
          helperText={errors.userId}
          onChange={handleInputChange('userId')}
        />
        <Input
          label="비밀번호"
          type="password"
          name="userPassword"
          placeholder="8~12자리 / 영문 대소문자, 숫자, 특수문자 조합"
          error={!!errors.password}
          helperText={errors.password}
          onChange={handleInputChange('password')}
        />
        <Input
          label="이름"
          type="name"
          name="userName"
          placeholder="이름 입력"
          error={!!errors.name}
          helperText={errors.name}
          onChange={handleInputChange('name')}
        />
        <Input
          label="이메일"
          type="email"
          name="userEmail"
          placeholder="email@example.com"
          error={!!errors.email}
          helperText={errors.email}
          onChange={handleInputChange('email')}
        />
        <Input
          label="아이디"
          type="id"
          name="userId"
          placeholder="4~15자리 / 영문, 숫자, 특수문자'_' 사용가능"
          error={!!errors.userId}
          helperText={errors.userId}
          onChange={handleInputChange('userId')}
        />
        <Input
          label="비밀번호"
          type="password"
          name="password"
          onChange={handleInputChange('password')}
          value={formData.password}
        />
        <Input
          label="이름"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange('name')}
        />
        <Input
          label="닉네임"
          type="text"
          name="nickName"
          value={formData.nickName}
          onChange={handleInputChange('nickName')}
        />
        <Input
          label="이메일"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange('email')}
        />
        <S.Button type="submit">회원가입</S.Button>
      </S.ContainerInner>
    </S.Container>
  );
}

export default Index;
