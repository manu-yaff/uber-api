export const homeController = (_, res) => {
  console.log('Hello Palenca')
  res.setHeader('Content-Type', 'application/json');
  res.send({ message: 'welcome' })
}
