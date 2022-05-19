-- BOARD : CRUD

-- INSERT
INSERT INTO board (
    seq,
    title,
    contents,
    read_cnt,
    reg_id,
    mod_id
) VALUES (
    :v0,
    :v1,
    :v2,
    :v3,
    :v5,
    :v7
);

-- DELETE
DELETE FROM BOARD
WHERE SEQ = 1;

-- DOSELECTONE
SELECT  seq,
        title,
        contents,
        read_cnt,
        TO_CHAR(reg_dt, 'YYYY/MM/DD HH24:MI:SS') AS REG_DT,
        reg_id,
        TO_CHAR(mod_dt, 'YYYY/MM/DD HH24:MI:SS') AS MOD_DT,
        mod_id
FROM board
WHERE seq = :SEQ;

-- UPDATE
UPDATE BOARD
SET title = :v1
    ,contents = :v2
    ,mod_dt = SYSDATE
    ,mod_id = :v3
WHERE SEQ = :v0;

-- ��ȸ�Ǽ� ����
UPDATE BOARD
SET READ_CNT = READ_CNT + 1
WHERE SEQ = :v0;

-- �����ȸ
ALTER SESSION SET STATISTICS_LEVEL = ALL;
SELECT A.SEQ,
       A.RNUM AS NUM,
       A.TITLE,
       TO_CHAR(A.MOD_DT, 'YYYY/MM/DD') AS MOD_DT,
       A.MOD_ID
FROM(
    SELECT ROWNUM AS RNUM, T1.*
    FROM (
        SELECT *
        FROM BOARD
        --�˻�����
        ORDER BY MOD_DT DESC
    )T1
    WHERE ROWNUM <= 10
)A
WHERE RNUM >= 1
;
SELECT * FROM TABLE(DBMS_XPLAN.DISPLAY_CURSOR(NULL,NULL,'ALLSTATS LAST -ROWS +PREDICATE'));

-- �����ͻ���
TRUNCATE TABLE BOARD;
INSERT INTO BOARD(
SELECT LEVEL AS SEQ,
       '����' || LEVEL AS TITLE,
       '����' || LEVEL AS CONTENTS,
       0 AS READ_CNT,
       SYSDATE - (ROWNUM / (60 * 60)) AS REG_DT,
       'ADMIN' AS REG_ID,
       SYSDATE - (ROWNUM / (60 * 60)) AS MOD_DT,
       'ADMIN' AS MOD_ID
FROM dual
CONNECT BY LEVEL <= 900000
);
COMMIT;

-- ��ü�Ǽ� ��ȸ
SELECT COUNT(*) total_cnt
FROM BOARD;
--�˻�����