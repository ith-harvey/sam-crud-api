const Artwork = require('../models/artwork')

const getAll = (req, res) => {
  Artwork.get().then(artworks => {
    res.json(artworks)
  })
}

const getOne = (req, res) => {
  const id = req.params.id
  Artwork.get(id).then(artwork => {
    res.json(artwork)
  })
}

const del = (req, res) => {
  const id = req.params.id
  Artwork.delete(id).then(([artwork]) => {
    res.json(artwork)
  })
}

const create = (req, res) => {
  Artwork.create(req.body).then(([artwork]) => {
    res.json(artwork)
  })
}

const update = (req, res) => {
  const id = req.params.id
  Artwork.update(id, req.body).then(([artwork]) => {
    res.json(artwork)
  })
}

module.exports = {
  getAll, getOne, del, create, update
}
