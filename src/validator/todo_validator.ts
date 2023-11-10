import S from 'fluent-json-schema';



const todoValidator = S.object()
    .prop('title', S.string().required())
    .prop('description', S.string().required())
    .prop('completed', S.boolean().required());


export const todoSchema = {
    body: todoValidator,

}