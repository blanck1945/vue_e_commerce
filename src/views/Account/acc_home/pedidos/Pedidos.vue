<template>
  <div>
    <h3>Ver el estado de tu pedido</h3>
    <PedidosInput
      find_label="Número de pedido "
      :spanComp="true"
      span_text="*"
      find_sub="Puedes encontrarlo en el correo electrónico de confirmación del pedido."
    />
    <PedidosInput
      find_label="Correo electrónico utilizado en el pedido "
      :spanComp="true"
      span_text="*"
      find_sub="El correo electrónico que usaste para el pedido."
    />
  </div>
</template>

<script>
import PedidosInput from "./Pedidos_Inp";
export default {
  components: {
    PedidosInput,
  },
};
</script>