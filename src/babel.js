export default function(context, opts = {}) {
  return {
    presets: [[require.resolve('./umi'), opts]],
  };
}
