import { BasicColumn } from '@/components/Table';
import { FormSchema } from '@/components/Form';

export const columns: BasicColumn[] = [
  {
    title: '应用名称',
    key: 'appName',
    align: 'center',
  },
  {
    title: '窗口标题',
    key: 'title',
    align: 'center',
  },
  {
    title: '对话模型',
    key: 'chatModel',
    align: 'center',
    width: 180,
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 160,
    align: 'center',
  },
];

export const searchSchemas: FormSchema[] = [
  {
    field: 'text',
    component: 'NInput',
    label: '内容',
    componentProps: {
      placeholder: '请输入内容',
    },
  },
];