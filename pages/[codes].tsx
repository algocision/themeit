import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import Home from '.';

const Codes: NextPage = () => {
  const router = useRouter();
  const { codes } = router.query;

  const [parsedCodes, setParsedCodes] = useState<string[]>([]);

  useMemo(() => {
    if (typeof codes === 'string') {
      setParsedCodes(codes.split('-'));
    }
  }, [codes]);

  return <Home codes={parsedCodes} />;
};

export default Codes;
