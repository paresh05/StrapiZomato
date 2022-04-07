module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4b749d8006b801c09adad9137eb7693e'),
  },
});
